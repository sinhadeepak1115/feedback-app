import { z } from "zod";

export const userValidation = z
  .string()
  .min(2, "Username must be at least 2 charater")
  .max(20, "Username must be atmost 20 character")
  .regex(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric");

export const signUpSchema = z.object({
  username: userValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, "Password must be at least 6 character"),
});
