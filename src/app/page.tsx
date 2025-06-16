"use client";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import { PricingBasic } from "@/components/Pricing";
import { SplineSceneBasic } from "@/components/SplineScene";
import { useState, useEffect } from "react";

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
        <div className="px-6">
          <main className="flex flex-col gap-24">
            <SplineSceneBasic />
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 dark:from-neutral-50 dark:to-neutral-400 leading-tight transition-colors duration-500 break-words hyphens-auto">
                  Automated scraping of document sources to give you the best
                  insight you need
                </h2>
              </div>
              <div className="flex-1">
                <AnimatedBeamDemo />
              </div>
            </div>
            <PricingBasic />
          </main>
        </div>
      )}
    </>
  );
}
