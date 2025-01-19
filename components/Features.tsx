import React from 'react';
import { FileSearch, Brain, TestTube, RefreshCw, Layers, Zap } from 'lucide-react';
import { BlurFade } from './ui/blurFade';

const features = [
  {
    icon: FileSearch,
    title: "Automated Documentation Identification",
    description: "Connects to chat platforms, support systems, knowledge bases, and source code to detect outdated or missing documentation.",
    gradient: "bg-gradient-to-br from-[#E5C9A8] via-[#C4A484] to-[#A67B5B]",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Pinpoints inconsistencies, outdated content, and gaps in your documentation with precision.",
    gradient: "bg-gradient-to-br from-[#4A4A4A] via-[#333333] to-[#1A1A1A]",
  },
  {
    icon: TestTube,
    title: "Autonomous Product Testing",
    description: "Uses your API, SDK, CLI tool, or application to verify functionality, capturing screenshots, videos, and source code snippets.",
    gradient: "bg-gradient-to-br from-[#E5C9A8] via-[#C4A484] to-[#A67B5B]",
  },
  {
    icon: RefreshCw,
    title: "Seamless Content Updates",
    description: "Contributes directly to your content management system for easy review and publishing.",
    gradient: "bg-gradient-to-br from-[#4A4A4A] via-[#333333] to-[#1A1A1A]",
  },
  {
    icon: Layers,
    title: "Integration-Ready",
    description: "Works effortlessly with your existing platforms, streamlining the documentation process.",
    gradient: "bg-gradient-to-br from-[#E5C9A8] via-[#C4A484] to-[#A67B5B]",
  },
  {
    icon: Zap,
    title: "Improved Efficiency",
    description: "Reduces manual effort in documentation upkeep, saving time and resources.",
    gradient: "bg-gradient-to-br from-[#4A4A4A] via-[#333333] to-[#1A1A1A]",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features of Quantstruct
          </h2>
          <p className="text-lg text-gray-600">
            Supercharge your documentation process with our AI-powered tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <BlurFade delay={0.25 * 2} className='flex justify-center' inView>
            <div
              key={index}
              className={`
                bg-gradient-to-br ${feature.gradient}
                rounded-2xl p-6
                shadow-lg shadow-gray-400/10
                transform transition-all duration-300
                hover:shadow-xl hover:scale-[1.02]
                backdrop-blur-sm
                border border-gray-200
                flex flex-col
                h-full
              `}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="mb-4 relative">
                <div className={`w-12 h-12 rounded-lg ${feature.gradient.includes('gray-100') ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center backdrop-blur-sm`}>
                  <feature.icon className={`w-6 h-6 ${feature.gradient.includes('gray-100') ? 'text-gray-100' : 'text-gray-800'}`} />
                </div>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${feature.gradient.includes('gray-100') ? 'text-gray-800' : 'text-gray-100'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${feature.gradient.includes('gray-100') ? 'text-gray-700' : 'text-gray-300'} flex-grow`}>
                {feature.description}
              </p>
            </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

