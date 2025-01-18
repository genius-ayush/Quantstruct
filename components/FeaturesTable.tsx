import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import { AnimatedBreamUse } from "./AnimatedBeamUse";
// import AnimatedListDemo from "@/components/example/animated-list-demo";
// import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BentoCard , BentoGrid } from "./ui/bentoGrid";
// import Marquee from "@/components/magicui/marquee";



const features = [
  {
    Icon: FileTextIcon,
    name: "Researched",
    description: "Quantstruct identifies which documentation needs to be updated by connecting to your chat platforms, support systems, existing knowledge bases, and optionally source code.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      "think"
    ),
  },
  {
    Icon: BellIcon,
    name: "Analyzed",
    description: "Our AI analyzes the gathered data to pinpoint inconsistencies, outdated information, or missing details in your documentation, ensuring accuracy and relevance.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBreamUse className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Verified",
    description: "Our AI agents autonomously use your API, SDK, CLI tool, or application — saving screenshots, videos, and source code to test your product.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBreamUse className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Updated",
    description: "Quantstruct makes a contribution to your content management system, which you can tweak and modify before publishing.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
        "Think think"
    ),
  },
];

export function FeaturesTable() {
  return (
    <div className="flex justify-center">
    <BentoGrid className="w-3/5 h-screen">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
    </div>
  );
}
