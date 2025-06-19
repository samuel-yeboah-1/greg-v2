"use client";
import React, { useState, useEffect, useRef } from "react";
import ToggleButton from "./animated-hamburger";
import { gsap } from "gsap";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (toggleMenu) {
        // Set initial state before animation
        gsap.set(menuRef.current, {
          display: "flex",
          y: "-100%",
          opacity: 0,
        });

        gsap.to(menuRef.current, {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power1.in",
          pointerEvents: "none",
          onComplete: () => {
            if (menuRef.current) {
              gsap.set(menuRef.current, { display: "none" });
            }
          },
        });
      }
    }
  }, [toggleMenu]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 mt-6">
      <div className="mx-auto w-full md:w-[90%] lg:w-[75%] px-4">
        <nav className="flex items-center justify-between py-3 px-4 rounded-3xl backdrop-blur-md bg-white/60 dark:bg-black/30">
          {/* Left - Logo */}
          <div className="flex-1">
            <p className="font-bold text-lg">
              <Link href="/">Greg AI</Link>
            </p>
          </div>

          {/* Center - Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex flex-row gap-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Toggle + Sign In */}
          <div className="flex-1 flex justify-end gap-4 items-center">
            <div className="hidden md:block">
              <ModeToggle />
            </div>
            <div className="hidden md:block">
              <Button variant="outline" asChild>
                <a href="/auth/signin">Sign In</a>
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden z-[60] relative">
              <div className="flex flex-row gap-3 items-center">
                <ModeToggle />
                <ToggleButton isOpen={toggleMenu} onClick={handleToggleMenu} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="md:hidden fixed inset-0 h-dvh bg-white/50 backdrop-blur-3xl shadow-lg z-50 flex-col items-center justify-center"
        style={{
          display: "none",
        }}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className="text-3xl">
              <a
                href={link.link}
                onClick={() => setToggleMenu(false)}
                className="hover:text-gray-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="text-3xl">
            <Button variant="outline" asChild>
              <a href="/auth/signin" onClick={() => setToggleMenu(false)}>
                Sign In
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
