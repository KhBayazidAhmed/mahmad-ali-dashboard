"use server";

import dbConnect from "@/lib/db/connection";
import { orderPlaceSchema } from "@/lib/zodSchema/orderPlace";
import Order from "@/lib/db/models/Order.Model";
import { auth } from "@/auth/authSetup";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import UserModel from "@/lib/db/models/User.Model";
import TransitionModel from "@/lib/db/models/Transition.model";
import OfferModel from "@/lib/db/models/Offer.Model";

export async function createOrder(initial: unknown, formData: FormData) {
  // Authenticate user session
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const userId = session.user.id;

  // Parse form data
  const orderData = {
    name: formData.get("name") as string,
    idType: formData.get("idType") as string,
    idNumber: formData.get("idNumber") as string,
    note: formData.get("note") as string,
    copyType: formData.get("copyType") as string,
  };

  // Validate form data
  const validation = orderPlaceSchema.safeParse(orderData);
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors[0]?.message || "Invalid input data",
    };
  }

  try {
    await dbConnect();

    // Fetch user and offer
    const user = await UserModel.findById(userId);
    if (!user) throw new Error("User not found!");

    const activeOffer = await OfferModel.findOne({ running: true });

    // Calculate price
    const price = calculatePrice(orderData.copyType, user, activeOffer);
    if (price === null) {
      return { success: false, message: "Invalid order type" };
    }

    // Check user balance
    if (user.balance - price < user.minimumBalance) {
      return {
        success: false,
        message: "Insufficient balance to process this order.",
      };
    }

    // Create a new order
    const newOrder = await createNewOrder(orderData, userId);

    // Update user balance and orders
    await updateUserAfterOrder(userId, newOrder._id, price);

    // Log the transaction
    await createTransactionLog(userId, "Order created", 5);

    // Revalidate dashboard
    revalidatePath(`/dashboard/${userId}`);

    return { success: true, message: "Order created successfully" };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
    return { success: false, message: "Error creating order" };
  }
}

// Utility: Calculate the price of the order
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function calculatePrice(copyType: string, user: any, offer: any) {
  if (offer) {
    // Use offer prices if available
    return getPriceFromOffer(copyType, offer);
  } else {
    // Use user's default prices if no offer is running
    return getPriceFromUser(copyType, user);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPriceFromOffer(copyType: string, offer: any) {
  switch (copyType) {
    case "sign_copy":
      return offer.signCopyPrice;
    case "nidCopy":
      return offer.nidCopyPrice;
    case "server_copy":
      return offer.serverCopyPrice;
    default:
      return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPriceFromUser(copyType: string, user: any) {
  switch (copyType) {
    case "sign_copy":
      return user.signCopyPrice;
    case "nidCopy":
      return user.nidCopyPrice;
    case "server_copy":
      return user.serverCopyPrice;
    default:
      return null;
  }
}

// Utility: Create a new order
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createNewOrder(orderData: any, userId: string) {
  const newOrder = new Order({
    ...orderData,
    status: "pending",
    orderTime: new Date(),
    user: userId,
  });
  return await newOrder.save();
}

// Utility: Update user balance and add order to user's orders
async function updateUserAfterOrder(
  userId: string,
  orderId: string,
  price: number
) {
  await UserModel.findByIdAndUpdate(
    userId,
    {
      $push: { orders: orderId },
      $inc: { balance: -price },
    },
    { new: true }
  );
}

// Utility: Create a transaction log
async function createTransactionLog(
  userId: string,
  description: string,
  amount: number
) {
  await TransitionModel.create({
    userId,
    description,
    amount,
    type: "cashIn",
  });
}
