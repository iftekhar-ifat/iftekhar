"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cog, Menu, Microscope, NotebookPen, Palette, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { useState } from "react";

const navItems = [
  { name: "Research", href: "/research", logo: Microscope },
  { name: "Projects", href: "/projects", logo: Cog },
  { name: "Blogs", href: "/blogs", logo: NotebookPen },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-black/[0.1] bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:border-white/[0.1]">
      <MaxWidthWrapper>
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Icons.logo className="h-20 w-20" />
            <span className="sr-only">Iftekhar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium font-mono transition-colors hover:text-primary relative",
                    isActive(item.href)
                      ? "text-foreground after:bg-primary"
                      : "text-muted-foreground",
                  )}
                >
                  <div className="flex">
                    <item.logo className="mr-2 h-5 w-5" />
                    {item.name}
                  </div>
                </Link>

                {index < navItems.length - 1 && (
                  <div className="h-6">
                    <Separator orientation="vertical" className="bg-muted" />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative h-8 w-8"
                  >
                    <Menu
                      className={cn(
                        "h-5 w-5 absolute transition-all duration-200",
                        isOpen
                          ? "opacity-0 rotate-90 scale-50"
                          : "opacity-100 rotate-0 scale-100",
                      )}
                    />
                    <X
                      className={cn(
                        "h-5 w-5 absolute transition-all duration-200",
                        isOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 -rotate-90 scale-50",
                      )}
                    />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="mt-0.5 w-64 font-mono rounded-md bg-white/50 backdrop-blur-sm dark:bg-neutral-950/50"
                >
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "w-full cursor-pointer",
                          isActive(item.href)
                            ? "bg-accent text-accent-foreground font-medium"
                            : "",
                        )}
                      >
                        <DropdownMenuItem className="cursor-pointer rounded-md p-1 text-foreground/80 transition-colors duration-300 hover:text-foreground focus:bg-accent focus:outline-none">
                          <item.logo className="mr-2 h-6 w-6" />
                          <span>{item.name}</span>
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center w-full justify-between rounded-lg px-2 py-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Palette className="mr-2 h-5 w-5" />
                        <span>Theme</span>
                      </div>
                      <ThemeToggle />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
