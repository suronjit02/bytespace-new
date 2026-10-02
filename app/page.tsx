import Courses from "@/components/sections/Courses";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <Courses />
      <Footer />
    </main>
  );
}
