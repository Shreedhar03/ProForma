"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Home, Scroll, Users2 } from "lucide-react"

const links = [
    { title: 'Home', href: '/dashboard', icon: <Home size={21}></Home> },
    { title: 'Invoices', href: '/dashboard/invoices', icon: <Scroll size={21}></Scroll> },
    { title: 'Customers', href: '/dashboard/customers', icon: <Users2 size={21}></Users2> },
]

export default function NavMenu() {
    return (
        <NavigationMenu>
            <div className="flex flex-col items-start justify-center">
                {
                    links.map(link => {
                        return (
                            <NavigationMenuItem>
                                <Link href={link.href} legacyBehavior passHref>
                                    <p className={`${navigationMenuTriggerStyle()} bg-inherit cursor-pointer list-none flex items-center gap-2`}>
                                        {link.icon}{link.title}
                                    </p>
                                </Link>
                            </NavigationMenuItem>
                        )
                    })
                }

            </div>
        </NavigationMenu>
    )
}