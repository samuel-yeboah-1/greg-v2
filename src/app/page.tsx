import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import { PricingBasic } from "@/components/Pricing";
import { SplineSceneBasic } from "@/components/SplineScene";

export default function Home() {
  return (
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
  );
}
