"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplittingText } from "./animate-ui/text/splitting";

export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[600px] sm:min-h-[700px] md:h-[600px] lg:h-[650px] xl:h-[600px] bg-white/5 dark:bg-black/[0.96] relative overflow-hidden transition-colors duration-500">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />

      <div className="flex h-full flex-col md:flex-row items-center">
        {/* Content section */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center min-h-0">
          <div className="max-w-full">
            <SplittingText
              text="Automate actions with Greg"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 dark:from-neutral-50 dark:to-neutral-400 leading-tight transition-colors duration-500 break-words hyphens-auto"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            />
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-neutral-300 transition-colors duration-500 leading-relaxed break-words max-w-full lg:max-w-md xl:max-w-lg">
            Make insights and make data-driven decisions today to take your
            business to the next level
          </p>
        </div>

        {/* Spline scene section - fills remaining height on mobile */}
        <div className="flex-1 relative min-h-[50vh] w-full overflow-hidden flex items-center justify-center">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full scale-150 sm:scale-125 md:scale-100 origin-center"
          />
        </div>
      </div>
    </Card>
  );
}
