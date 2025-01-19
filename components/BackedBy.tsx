import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "./ui/animatedGradientText";
import { Button } from "./ui/button";


export default  function BackedBy() {
  return (
    <div className="z-10 flex pt-10  items-center justify-center  ">
      {/* <AnimatedGradientText className="px-4 py-2 text-lg font-bold">Backed by YCombinator</AnimatedGradientText> */}
      <div className="border-t border-white/10 ">
      <button className="  py-2  text-orange-700 font-light"><span className="text-black font-medium"> Backed by</span> <span className="px-2 py-1 bg-orange-700 text-white">Y</span> Combinator</button>
      </div>
      
    </div>
  );
}
