import Link from "next/link";
import Drawer from "./drawer";

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

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-4 sticky top-0">
      <p className="text-primary text-3xl font-[700] top-[16px] left-[16px]">
        Digital
      </p>

      <div className="hidden sm:flex gap-[32px]">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="md:text-[18px] lg:text-[24px] relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            {link.name}
          </Link>
        ))}
      </div>
      <Drawer />
    </nav>
  );
}
