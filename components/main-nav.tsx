import * as React from "react"
import Link from "next/link"
import { Command } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Command className="mr-2 h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
