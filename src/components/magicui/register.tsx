import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { DockDemo } from "../data-source-dock";

export function RegisterInterestReveal() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Greg <span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Be among the first to register your interest.{" "}
          <span className="text-[#5046e6]">with Greg</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <span>
            -&gt; 20+ free uploads and 1000 queries for free.
            <br />
            Support data types include ----
            <p className="font-semibold text-[#5046e6]">Google docs</p>
            <p className="font-semibold text-[#5046e6]">PDF</p>
            <p className="font-semibold text-[#5046e6]"> DOCX</p>
            <p className="font-semibold text-[#5046e6]">Motion</p>
            . <br />
            -&gt; Over 99% <br />
          </span>
        </div>
      </BoxReveal>
      <BoxReveal>
        <DockDemo />
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
