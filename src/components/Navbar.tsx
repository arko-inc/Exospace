"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Missions",
    href: "/missions",
    subLinks: [
      { name: "Lunar Gateway", href: "/missions/lunar-gateway" },
      { name: "Mars Rover", href: "/missions/mars-rover" },
      { name: "Europa Clipper", href: "/missions/europa-clipper" },
      { name: "Plutonia", href: "/missions/plutonia" },
    ],
  },
  { name: "Technologies", href: "/technologies",
    subLinks: [
      { name: "Rovers", href: "/technologies/rovers" },
      { name: "Robots", href: "/technologies/Robots" },
      { name: "Spacecrafts", href: "/technologies/spacecrafts" },
    ],},
  { name: "Phoenix-7", href: "/phoenix-7" },
  { name: "Argon", href: "/argon" },
   { name: "Satellites", href: "/satellites" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? "" : linkName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed -top-4 left-0 right-0 z-50 px-4 sm:px-8">
        <nav 
          className="relative my-4 flex items-center justify-between w-full h-10 max-w-8xl mx-auto p-4 shadow-lg ring-1  bg-black ring-white/10"
          ref={navRef}
        >
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-between w-full font-light">
            {/* Logo - Left side */}
            <Link href="/" className="text-white">
              <span className="inline-block text-3xl font-nothing">EXOSPACE</span>
            </Link>

            {/* Desktop Navigation - Right side */}
            <div className="hidden md:flex items-center font-light">
              <ul className="flex items-center font-light">
                {navLinks.map((link, index) => (
                  <li
                    key={link.name}
                    className="relative min-w-[120px] font-light"
                  >
                    <div className="flex flex-col items-center h-full">
                      <Link
                        href={link.href}
                        className={`
                          relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 
                          flex items-center justify-center gap-1 w-full h-full font-thin
                          border-l border-white/20
                          ${index === navLinks.length - 1 ? 'border-r border-white/20' : ''}
                        `}
                        onClick={(e) => {
                          if (link.subLinks) {
                            e.preventDefault();
                            toggleDropdown(link.name);
                          }
                        }}
                      >
                        {link.name}
                        {pathname === link.href && (
                          <motion.span
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 bg-white rounded-full font-thin"
                            layoutId="active-dot"
                          />
                        )}
                        {link.subLinks && (
                          <motion.span
                            animate={{
                              rotate: activeDropdown === link.name ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        )}
                      </Link>
                    
                      {/* Dropdown */}
                      {link.subLinks && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full -left-4 w-48 rounded-b-lg bg-black/80 backdrop-blur-md p-2 ring-1 ring-white/10"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-md"
                              onClick={() => setActiveDropdown("")}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 md:hidden"
          >
            <div className="pt-24 px-8">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-2xl text-gray-300 hover:text-white transition-colors flex items-center gap-3"
                    >
                      {link.name}
                      {pathname === link.href && (
                        <span className="h-2 w-2 bg-white rounded-full" />
                      )}
                    </Link>
                    {link.subLinks && (
                      <div className="mt-2 flex flex-col gap-2 pl-4 border-l border-white/20">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            onClick={toggleMenu}
                            className="text-lg text-gray-400 hover:text-white transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;