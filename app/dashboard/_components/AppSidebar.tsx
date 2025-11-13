"use client";
import React, { useContext } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  DatabaseIcon,
  Gem,
  HeadphonesIcon,
  LayoutDashboardIcon,
  UserIcon,
  WalletCardsIcon,
} from "lucide-react";
import Link from "next/link";
import { UserDetailContext } from "@/context/UserDetailContext";
import { Button } from "@/components/ui/button";

const menuOptions = [
  { title: "Dashboard", icon: LayoutDashboardIcon, url: "/dashboard" },
  { title: "Ai Agents", icon: HeadphonesIcon, url: "#" },
  { title: "Data", icon: DatabaseIcon, url: "#" },
  { title: "Pricing", icon: WalletCardsIcon, url: "#" },
  { title: "Profile", icon: UserIcon, url: "#" },
];

const AppSidebar = () => {
  const { open } = useSidebar();
  const { userDetail } = useContext(UserDetailContext);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={35} height={35} />
          {open && <h2 className="font-extrabold text-lg">Agent Ai</h2>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            {menuOptions.map((menu, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild size={open ? "lg" : "default"}>
                  <Link href={menu.url}>
                    <menu.icon className="mr-2 h-4 w-4" />
                    <span className="">{menu.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2">
          <Gem className="mr-2 size-4" />
          {open && (
            <h1 className="text-sm">
              Remaining Credit:{" "}
              <span className="font-bold">{userDetail?.token}</span>
            </h1>
          )}
        </div>
        {
            open && <Button className="w-full">Upgrade to Unlimited</Button>
        }
        {open && (
          <div className="flex items-center p-4 gap-2">
            <UserIcon className="mr-2 size-4" />
            <h1 className="text-sm">
              User: <span className="font-bold">{userDetail?.name}</span>
            </h1>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
