"use client";
import * as React from "react";
import {
  BookOpen,
  Bot,
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    // TODO: Populate this with clerk user data
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/home",
        icon: LayoutDashboard,
      },
      {
        title: "Play",
        url: "#",
        icon: CirclePlay,
        items: [
          {
            title: "Search",
            url: "search",
          },
          {
            title: "Favorites",
            url: "#",
          },
          {
            title: "Recently Played",
            url: "#",
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
