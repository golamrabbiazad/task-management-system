import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="mx-auto flex flex-row items-center">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.gitHub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.twitter className="h-5 w-5 fill-current" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
    </footer>
  )
}
