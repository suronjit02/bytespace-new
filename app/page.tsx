import Categories from "@/components/sections/Categories";
import Courses from "@/components/sections/Courses";
import Footer from "@/components/sections/Footer";
import Growth from "@/components/sections/Growth";
import Hero from "@/components/sections/Hero";
import JoinAsCreator from "@/components/sections/JoinAsCreator";
import Logos from "@/components/sections/Logos";
import Testimonials from "@/components/sections/Testimonials";
import { Joan } from "next/font/google";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <Courses />
      <Categories />
      <Growth />
      <JoinAsCreator />
      <Testimonials />
      <Footer />
    </main>
  );
}
