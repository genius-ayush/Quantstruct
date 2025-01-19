import { CalendarIcon, FileTextIcon , BarChartIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon , ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import { AnimatedBreamUse } from "./AnimatedBeamUse";
// import AnimatedListDemo from "@/components/example/animated-list-demo";
// import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BentoCard , BentoGrid } from "./ui/bentoGrid";
import { Calendar } from "./ui/calendar";
import Image from "next/image";
// import Marquee from "@/components/magicui/marquee";



const features = [
  {
    Icon: BarChartIcon,
    name: "Analyzed",
    description: "Our AI analyzes the gathered data to pinpoint inconsistencies, outdated information, or missing details in your documentation, ensuring accuracy and relevance.  ",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 bg-gradient-to-t from-white via-gray-200 to-[#CBBFB3]",
    background: (
      
      <Image
        src={'/analysis2.gif'}
        alt="100xJobs logo"
        width={100}
        height={100}
        className="absolute right-2 top-4 h-2/5 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Researched",
    description: "Quantstruct identifies which documentation needs to be updated by connecting to your chat platforms, support systems, existing knowledge bases, and optionally source code.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 bg-gradient-to-t from-white via-gray-200 to-[#CBBFB3]",
    background: (
      <AnimatedBreamUse className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 bg-gradient-to-t from-white via-gray-200 to-[#CBBFB3]" />
    ),
  },
  {
    Icon: ShieldCheck,
    name: "Verified",
    description: "Our AI agents autonomously use your API, SDK, CLI tool, or application — saving screenshots, videos, and source code to test your product.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 bg-gradient-to-t from-white via-gray-200 to-[#CBBFB3]",
    background: (
      <Image
        src={'/verified.svg'}
        alt="100xJobs logo"
        width={100}
        height={100}
        className="absolute right-2 top-4 h-[300px] w-10/12 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Updated",
    description: "Quantstruct makes a contribution to your content management system, which you can tweak and modify before publishing.",
    className: "col-span-3 lg:col-span-1 bg-gradient-to-t from-white via-gray-200 to-[#CBBFB3] ",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
      mode="single"
      selected={new Date(2022, 4, 11, 0, 0, 0)}
      className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
    />
    ),
  },
];

export function FeaturesTable() {
  return (
    <div className="flex justify-center">
    <BentoGrid className="w-3/5">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
    </div>
  );
}
