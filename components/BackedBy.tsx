import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "./ui/animatedGradientText";
import { Button } from "./ui/button";


export default  function BackedBy() {
  return (
    <div className="z-10 flex pt-16  items-center justify-center mb-2">
      {/* <AnimatedGradientText className="px-4 py-2 text-lg font-bold">Backed by YCombinator</AnimatedGradientText> */}
      <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-bold"> Backed by Y Combinator</button>
      
    </div>
  );
}
