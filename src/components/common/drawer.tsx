import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/", // Change this to "/home"
  },
  {
    name: "About us",
    href: "/", // Change this to "/about-us"
  },
  {
    name: "Blog",
    href: "/", // Change this to "/blog"
  },
  {
    name: "Pricing",
    href: "/", // Change this to "/pricing"
  },
];

export default function Drawer() {
  return (
    <Sheet>
      <SheetTrigger className="flex sm:hidden">
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left text-[24px] text-primary font-semibold">
            Digital
          </SheetTitle>
          <SheetDescription className="flex flex-col text-left space-y-4 pt-4">
            {navLinks.map((link) => (
              <span>
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-[20px] relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  {link.name}
                </Link>
              </span>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
