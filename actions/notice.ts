"use server";

import dbConnect from "@/lib/db/connection";
import NoticeModel from "@/lib/db/models/Notice.Model";
import { revalidatePath, revalidateTag } from "next/cache";

export async function createNotice(initial: unknown, formData: FormData) {
  try {
    await dbConnect();
    const newNotice = new NoticeModel({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    });
    await newNotice.save();
    revalidateTag("all notices");
    revalidatePath("/ma/run-offer");
    return {
      success: true,
      message: "Notice created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
