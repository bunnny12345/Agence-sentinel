"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton, SignedIn, SignedOut, useClerk, useUser,SignInButton } from "@clerk/nextjs";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  //to add clerk user authentication
  const { user } = useUser()
  const { openSignIn } = useClerk()

  // Reusable nav items
  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <Link
        onClick={onClick}
        href="/"
        className={`group relative inline-block font-bold overflow-hidden ${pathname === "/"
            ? "text-secondary hover:text-primary transition-colors duration-300"
            : "text-black"
          }`}
      >
        {pathname === "/" ? (
          // 👉 When active, show just normal text with color transition
          <span className="block">Home</span>
        ) : (
          // 👉 When not active, show dual-layer hover animation
          <>
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Home
            </span>
            <span className="absolute left-0 top-full block text-[color:#809DFF] transition-transform duration-300 group-hover:-translate-y-full">
              Home
            </span>
          </>
        )}
      </Link>

      <Link
        onClick={onClick}
        href="/services"
        className={`group relative inline-block font-bold overflow-hidden ${pathname === "/services"
            ? "text-secondary hover:text-primary transition-colors duration-300"
            : "text-black"
          }`}
      >
        {pathname === "/services" ? (
          <span className="block">Services</span>
        ) : (
          <>
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Services
            </span>
            <span className="absolute left-0 top-full block text-secondary transition-transform duration-300 group-hover:-translate-y-full">
              Services
            </span>
          </>
        )}
      </Link>

      <Link
        onClick={onClick}
        href="/about-us"
        className={`group relative inline-block font-bold overflow-hidden ${pathname.startsWith("/about-us")
            ? "text-secondary hover:text-primary transition-colors duration-300"
            : "text-black"
          }`}
      >
        {pathname.startsWith("/about-us") ? (
          <span className="block">About Us</span>
        ) : (
          <>
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              About Us
            </span>
            <span className="absolute left-0 top-full block text-secondary transition-transform duration-300 group-hover:-translate-y-full">
              About Us
            </span>
          </>
        )}
      </Link>

      <Link
        onClick={onClick}
        href="/contact-us"
        className={`group relative inline-block font-bold overflow-hidden ${pathname.startsWith("/contact-us")
            ? "text-secondary hover:text-primary transition-colors duration-300"
            : "text-black"
          }`}
      >
        {pathname.startsWith("/contact-us") ? (
          <span className="block">Contact Us</span>
        ) : (
          <>
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Contact Us
            </span>
            <span className="absolute left-0 top-full block text-secondary transition-transform duration-300 group-hover:-translate-y-full">
              Contact Us
            </span>
          </>
        )}
      </Link>

    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="tracking-wider">
          <span className="text-primary text-xl font-semibold">AGENCE </span>
          <span className="text-black text-xl font-semibold">SENTINEL</span>
        </Link>

        {/* Menu for large screens */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <NavLinks />
          {
          !user ?(
           <SignInButton mode="modal">
          <button  className="font-bold text-primary hover:text-white hover:bg-primary transition-all duration-500 px-4 py-2 ml-2 rounded-md">
            LOGIN
          </button>
          </SignInButton>)
          :(<UserButton />)
}
        </div>
          
        {/* LOGIN button and Menu icon for md and below */}

        <div className="flex items-center gap-x-2 lg:hidden">
          {
           !user ? (
            <SignInButton mode="modal">
           <button className="hidden md:block font-bold text-primary hover:text-white hover:bg-primary transition-all duration-500 px-4 py-2 rounded-md">
            LOGIN
          </button>
          </SignInButton>
          )
          : (<UserButton />)
           }
          <MenuIcon
            onClick={() => setIsOpen(true)}
            className="block w-8 h-8 cursor-pointer"
          />
        </div>

      </div>

      {/*  mobile menu for small & medium screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-full z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-lg font-semibold space-y-6 px-6 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <XIcon
          className="absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <NavLinks onClick={() => setIsOpen(false)} />
          {
           !user ? (
            <SignInButton mode="modal">
           <button className=" font-bold text-primary ">
            LOGIN
          </button>
          </SignInButton>
          )
          : (<UserButton />)
           }
          
      </div>
    </nav>
  );
};
