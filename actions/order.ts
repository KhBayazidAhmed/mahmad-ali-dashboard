"use server";
import dbConnect from "@/lib/db/connection";
import { orderPlaceSchema } from "@/lib/zodSchema/orderPlace";
import Order from "@/lib/db/models/Order.Model";
import { auth } from "@/auth/authSetup";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import UserModel from "@/lib/db/models/User.Model";
import TransitionModel from "@/lib/db/models/Transition.model";
export async function createOrder(initial: unknown, formData: FormData) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const name = formData.get("name") as string;
  const idType = formData.get("idType") as string;
  const idNumber = formData.get("idNumber") as string;
  const note = formData.get("note") as string;
  const copyType = formData.get("copyType") as string;
  const userId = session.user.id;
  const result = orderPlaceSchema.safeParse({
    name,
    idType,
    idNumber,
    note,
    copyType,
  });
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }
  try {
    await dbConnect();
    const user = await UserModel.findById(userId);

    if (!user) throw new Error("User not found!");

    // Determine the price based on the order type
    let price = 0;
    switch (copyType) {
      case "sign_copy":
        price = user.signCopyPrice;
        break;
      case "nidCopy":
        price = user.nidCopyPrice;
        break;
      case "server_copy":
        price = user.serverCopyPrice;
        break;
      default:
        return {
          success: false,
          message: "Invalid order type",
        };
    }

    // Ensure the user has sufficient balance
    if (user.balance - price < user.minimumBalance) {
      return {
        success: false,
        message: "Insufficient balance to process this order.",
      };
    }

    const newOrder = new Order({
      status: "pending",
      name,
      idType,
      idNumber,
      note,
      orderTime: new Date(),
      user: userId,
      copyType,
    });
    await newOrder.save();
    await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $push: { orders: newOrder._id },
        $inc: { balance: -price },
      },
      { new: true }
    );
    await TransitionModel.create({
      userId,
      description: "Order created ",
      amount: 5,
      type: "cashIn",
    });

    revalidatePath(`/dashboard/${session.user.id}`);
    return {
      success: true,
      message: "Order created successfully",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
    return {
      success: false,
      message: "Error creating order",
    };
  }
}
