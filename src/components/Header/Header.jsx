import Link from "next/link";

// Components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-white bg-dark relative shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl xl:text-4xl font-bold tracking-wide">
            Ujjwal <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-6">
          <Navbar />
          <Link
            href="/contact"
          >
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
