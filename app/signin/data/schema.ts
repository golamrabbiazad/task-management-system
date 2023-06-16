import { z } from "zod"

export const userSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type User = z.infer<typeof userSchema>
