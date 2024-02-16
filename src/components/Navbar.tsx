"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/inclusivity">inclusivity</HoveredLink>
            <HoveredLink href="/diversity">Diversity</HoveredLink>
            <HoveredLink href="/tailored">Tailored Experience</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Coming Soon"
              href="/product"
              src="https://pbs.twimg.com/profile_images/1742792917834485760/DWxtlBSe_400x400.jpg"
              description="Keep on watch ,Cause we are coming sooner than you think  "
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
