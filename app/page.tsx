import Colab from "@/components/Colab";
import Endnote from "@/components/Endnote";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#EFEEE9]">
      <Header/>
      <Hero/>
      <Colab/>
      <Features/>
      <HowItWorks/>
      <Endnote/>
      <Footer/>
    </div>
  );
}
