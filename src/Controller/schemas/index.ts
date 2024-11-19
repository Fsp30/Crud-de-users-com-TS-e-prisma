import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(0, "Age must be a positive number"),
});