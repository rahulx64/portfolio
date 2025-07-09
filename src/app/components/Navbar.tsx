"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => setIsOpen(!isOpen);

     const menuItems = [
          { name: "Home", href: "/" },
          { name: "Blogs", href: "/blogs" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
          { name: "About", href: "/about" },
          { name: "Coding ", href: "/coding" },
     ];

     return (
          <nav className="fixed w-full mb-4  bg-green-400  text-white backdrop-blur-sm z-50 shadow-md">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                         <Link href="/">Rahul Portfolio</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                         {menuItems.map((item) => (
                              <Link key={item.name} href={item.href}  className="hover:underline">
                                   {item.name}
                              </Link>
                         ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                         <button onClick={toggleMenu}>
                              {isOpen ? <X size={24} /> : <Menu size={24} />}
                         </button>
                    </div>
               </div>

               {/* Mobile Menu */}
               {isOpen && (
                    <div className="md:hidden bg-green-700/40 dark:bg-gray-800 px-4 py-2 space-y-2">
                         {menuItems.map((item) => (
                              <Link
                                   key={item.name}
                                   href={item.href}
                                   className="block hover:underline hover:text-black"
                                   onClick={() => setIsOpen(false)}
                              >
                                   {item.name}
                              </Link>
                         ))}
                    </div>
               )}
          </nav>
     );
};

export default Navbar;
