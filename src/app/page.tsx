"use client";

import LoadingScreen from "@/components/LoadingScreen";
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import { PricingBasic } from "@/components/Pricing";
import { SplineSceneBasic } from "@/components/SplineScene";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { FloatingPathsBackground } from "@/components/ui/floating-paths";
import { Link } from "react-scroll";
import { FileTreeDemo } from "@/components/magicui/FileTree";
import { MarqueeDemo } from "@/components/magicui/marque";
import { HighlightText } from "@/components/animate-ui/text/highlight";
import { TextReveal } from "@/components/magicui/text-reveal";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";
import { RegisterYourInterest } from "@/components/forms/register-your-interest";
import { RegisterInterestReveal } from "@/components/magicui/register";
import Magnet from "@/components/magicui/magnet";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoadingComplete(true); // skip loader
    } else {
      setShowLoader(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    localStorage.setItem("hasVisited", "true"); // mark as visited
    setShowLoader(false);
    setLoadingComplete(true);
  };

  return (
    <>
      {showLoader && <LoadingScreen onComplete={handleLoaderComplete} />}
      {loadingComplete && (
        <>
          {/* Background - lowest z-index */}
          <div className="fixed inset-0 w-full h-full z-0">
            <FloatingPathsBackground className="w-full h-full" position={-1}>
              .
            </FloatingPathsBackground>
          </div>

          {/* Main content - above background but below navbar */}
          <div className="relative z-10 pt-24 px-6">
            <main className="flex flex-col gap-40">
              <div className="flex flex-col gap-20 items-center justify-center w-[90vw] h-[90dvh]">
                <Magnet className="tracking-wider font-extrabold text-5xl md:text-8xl text-blue-500 text-center">
                  IntEaCt WiTh YOuR dATa
                </Magnet>

                <Link spy={true} smooth={true} to="register-your-interest">
                  <CoolMode>
                    <Button className="bg-black text-white dark:bg-blue-500 dark:text-white">
                      Register your interest
                    </Button>
                  </CoolMode>
                </Link>
              </div>

              <div>
                <HighlightText
                  className="tracking-wider font-extrabold text-5xl lg:text-8xl align-middle text-center md:text-justify"
                  text="Integrate With Your App"
                ></HighlightText>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex-1 w-full">
                  <FileTreeDemo />
                </div>
                <div className="flex-1 w-full">
                  <AnimatedBeamDemo />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <TextReveal className="tracking-wider font-extrabold text-5xl md:text-9xl align-middle text-center">
                  Hear What People Have To Say
                </TextReveal>
                <MarqueeDemo />
              </div>
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
      )}
    </>
  );
}
