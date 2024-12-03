"use server";
import dbConnect from "@/lib/db/connection";
import User from "@/lib/db/models/User.Model";
import { signUpSchema } from "@/lib/zodSchema/User";
import bcrypt from "bcrypt";

export const CreateUser = async (initial: unknown, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    // Validate input
    const result = signUpSchema.safeParse({ name, email, password });
    if (!result.success) {
      return {
        success: false,
        message: result.error.message,
      };
    }
    // Connect to the database
    await dbConnect();
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // await signIn("credentials", { email, password });

    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      message: "Error creating user",
    };
  }
};
