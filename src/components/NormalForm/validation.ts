import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email().min(1, "email is required"),
  password: z.string().min(8, "password to Short"),
});
export type TNormalForm = z.infer<typeof SignUpSchema>;
