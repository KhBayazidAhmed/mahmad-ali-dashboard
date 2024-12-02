import { z } from "zod";

export const orderPlaceSchema = z.object({
  name: z.string().optional(),
  idType: z.string().min(1, "ID Type is required"),
  idNumber: z.string().min(1, "ID Number is required"),
  copyType: z.enum(["server_copy", "sign_copy"]).default("server_copy"),
  note: z.string().optional(),
});
