import Colab from "@/components/Colab";
import Endnote from "@/components/Endnote";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Colab/>
      <Features/>
      <Endnote/>
      <Footer/>
    </div>
  );
}
