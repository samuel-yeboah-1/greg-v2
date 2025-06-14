"use client";
import React, { useState, useEffect, useRef } from "react";
import ToggleButton from "./animated-hamburger";
import { gsap } from "gsap";

function Navbar() {
  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Signin", link: "/auth/signin" },
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
    <nav className="p-6 relative">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p>Greg AI</p>
        </div>
        <ul className="hidden md:flex flex-row gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-[60] relative">
          <ToggleButton isOpen={toggleMenu} onClick={handleToggleMenu} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="md:hidden fixed inset-0 h-dvh bg-white/30 backdrop-blur-lg shadow-lg z-50 flex-col items-center justify-center"
        style={{
          display: "none",
        }}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className="text-3xl">
              <a
                href={link.link}
                onClick={() => setToggleMenu(false)} // Close menu when link is clicked
                className="hover:text-gray-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
