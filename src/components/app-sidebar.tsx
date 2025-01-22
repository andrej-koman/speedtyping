"use client";
import * as React from "react";
import {
  BookOpen,
  LifeBuoy,
  Settings2,
  Send,
  CirclePlay,
  LayoutDashboard,
} from "lucide-react";

import Logo from "~/app/_components/logo";
import { NavMain } from "~/components/nav-main";
import { NavSecondary } from "~/components/nav-secondary";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "~/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  console.log(pathname);
  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/home",
        icon: LayoutDashboard,
        isActive: pathname == "/home",
      },
      {
        title: "Play",
        url: "/search",
        icon: CirclePlay,
        isActive:
          pathname == "/search" ||
          pathname == "/favorites" ||
          pathname == "/recently-played",
        items: [
          {
            title: "Search",
            url: "/search",
            isActive: pathname == "/search",
          },
          {
            title: "Favorites",
            url: "#",
            isActive: pathname == "/favorites",
          },
          {
            title: "Recently Played",
            url: "#",
            isActive: pathname == "/recently-played",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" variant="floating" {...props}>
      <SidebarHeader className="flex items-center justify-center">
        <Logo href="/home" size="lg" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
