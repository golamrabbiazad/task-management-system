import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { UserSignInForm } from "./components/user-signin-form"
import { userSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In Forms.",
}

// Simulate a database read for tasks
async function getUsers() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/signin/data/users.json")
  )

  const users = JSON.parse(data.toString())

  return z.array(userSchema).parse(users)
}

export default async function SignInPage() {
  const users = await getUsers()

  return (
    <>
      <div className="container h-[800px] flex-col items-center justify-center xs:grid sm:grid md:grid lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password
            </p>
          </div>
          <UserSignInForm data={users} />
        </div>
      </div>
    </>
  )
}
