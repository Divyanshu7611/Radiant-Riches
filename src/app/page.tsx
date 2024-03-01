import Image from "next/image";
import Header from "@/components/Home/Header";
import Section from "@/components/Home/Section";
import CardSection from "@/components/Home/CardSection";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-richwhite">
      <Navbar />
      <Header />
      <Section />
      <CardSection />
      <Footer />
    </div>
  );
}
