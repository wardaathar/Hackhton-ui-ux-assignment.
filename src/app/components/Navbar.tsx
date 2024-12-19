"use client";
import Link from "next/link";
import { useState } from "react";
import { IoSearch } from "react-icons/io5"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Handbag Icon
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShoppingCart from "../components/shopingCart"; // Importing ShoppingCart component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <h2 className="text-[24px] font-bold">
          <span className="text-[#FF9F0D]">Food</span>Tuck
        </h2>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/menu" className="hover:text-orange-500 transition">
              Menu
            </Link>
           
            <Link href="/signup" className="hover:text-orange-500 transition">
              Signup
            </Link>
            <Link href="/about" className="hover:text-orange-500 transition">
              About
            </Link>
            <Link href="/food" className="hover:text-orange-500 transition">
            Food
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition">
              Contact
            </Link>
            <Link href="/shop" className="hover:text-orange-500 transition">
              Shop
            </Link>
            <Link href="#blog" className="hover:text-orange-500 transition">
              Blog
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-[200px] lg:w-[250px] ml-8">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
            />
            <IoSearch className="text-orange-500 ml-2" />
          </div>
        </div>

        <div className="ml-8 flex items-center">


          <Sheet>
            <SheetTrigger>
              <span className="text-white hover:text-orange-500 cursor-pointer"><PiHandbagBold  /></span>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  Here is your shopping cart. You can review your items here.
                </SheetDescription>
              </SheetHeader>
              {/* Render ShoppingCart Component inside the Sheet */}
              <ShoppingCart />
            </SheetContent>
          </Sheet>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "≡"}
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-orange-500 transition">
            Menu
          </Link>
          
          <Link href="/signup" className="hover:text-orange-500 transition">
            Signup
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link href="/food" className="hover:text-orange-500 transition">
           Food
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
          <Link href="/shop" className="hover:text-orange-500 transition">
              Shop
              </Link>
          <Link href="#blog" className="hover:text-orange-500 transition">
              Blog
            </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
          />
          <IoSearch className="text-orange-500 ml-2" />
        </div>

        {/* Shopping Bag Icon - Mobile */}
        <div className="mt-4 flex justify-between">
          <PiHandbagBold className="text-white text-2xl hover:text-orange-500 transition" />

          {/* Open Cart on Click for Mobile */}
          <Sheet>
            <SheetTrigger>
              <span className="text-white hover:text-orange-500 cursor-pointer"><PiHandbagBold  /></span>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  Here is your shopping cart. You can review your items here.
                </SheetDescription>
              </SheetHeader>
              <ShoppingCart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
