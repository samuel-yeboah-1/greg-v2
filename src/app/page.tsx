"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import { FloatingPathsBackground } from "@/components/ui/floating-paths";
import { Link } from "react-scroll";
import { FileTreeDemo } from "@/components/magicui/FileTree";
import { HighlightText } from "@/components/animate-ui/text/highlight";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";
import { RegisterYourInterest } from "@/components/forms/register-your-interest";
import { RegisterInterestReveal } from "@/components/magicui/register";
import Magnet from "@/components/magicui/magnet";
import { AboutUsSection } from "@/components/AboutUsSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const highlightRef = useRef(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoadingComplete(true);
    } else {
      setShowLoader(true);
    }

    // HighlightText scroll-trigger animation
    let split: SplitType | null = null;
    if (highlightRef.current) {
      split = new SplitType(highlightRef.current, { types: "words" });

      gsap.from(split.words, {
        y: 80,
        opacity: 0,
        stagger: 0.06,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: highlightRef.current,
          start: "top 80%",
        },
      });
    }

    return () => {
      if (split) {
        split.revert();
      }
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0">
        <FloatingPathsBackground className="w-full h-full" position={-1}>
          .
        </FloatingPathsBackground>
      </div>

      {/* Main content */}
      <div className="relative z-10 pt-24 px-6">
        <main className="flex flex-col gap-40">
          {/* Hero Section */}
          <div className="flex flex-col gap-20 items-center justify-center w-[93vw] h-[90dvh]">
            <div className="flex flex-row items-center justify-center">
              <Magnet className="tracking-wider font-extrabold text-5xl md:text-8xl text-blue-500 text-center">
                <span>GREG.</span>
              </Magnet>
            </div>

            <Link spy={true} smooth={true} to="register-your-interest">
              <CoolMode>
                <Button className="bg-black text-white dark:bg-blue-500 dark:text-white">
                  Register your interest
                </Button>
              </CoolMode>
            </Link>
          </div>

          {/* Integration Highlight */}
          <div>
            <HighlightText
              ref={highlightRef}
              className="tracking-wider font-extrabold text-5xl lg:text-8xl align-middle text-center md:text-justify"
              text="Integrate With Your App"
            />
          </div>

          {/* Demo Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex-1 w-full">
              <FileTreeDemo />
            </div>
            <div className="flex-1 w-full">
              <AnimatedBeamDemo />
            </div>
          </div>

          {/* About Us Section */}
          <AboutUsSection />

          {/* Register Section */}
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-2 w-full p-14"
            id="register-your-interest"
          >
            <RegisterInterestReveal />
            <RegisterYourInterest />
          </div>
        </main>
      </div>
    </>
  );
}
