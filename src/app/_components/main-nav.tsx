"use client";

import { NavigationMenuItem } from "@radix-ui/react-navigation-menu"
import Link from "next/link"
import { navigationMenuTriggerStyle, NavigationMenuLink, NavigationMenu, NavigationMenuList } from "~/components/ui/navigation-menu"

import { cn } from "~/lib/utils"

export default function MainNav({
    className,
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <NavigationMenu
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {/* I will remove the play option, as this will be the "home" page
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/play" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Play
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
*/}
        </NavigationMenu>
    )
}