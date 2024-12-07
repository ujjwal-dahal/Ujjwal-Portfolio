"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent>
      
        {/* Dialog Title for Accessibility */}
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle> {/* Hidden but accessible */}

        {/* Logo */}
        <div className="mt-32 mb-[4rem] text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Ujjwal <span className="text-accent"> . </span>
            </h1>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-5 text-[18px] capitalize items-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  pathName === link.path &&
                  "text-accent font-medium border-b-2 border-accent"
                } hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
