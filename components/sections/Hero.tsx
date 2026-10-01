import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function Hero() {
  return (
    <section className="relative h-256 overflow-hidden bg-grid bg-primary text-center text-white">
      <Image
        src="/images/hero/3d_ornament.png"
        alt=""
        width={1440}
        height={803}
        priority
        className="pointer-events-none absolute left-0 top-55.25 z-0 w-full"
      />

      <div className="relative z-10">
        <Navbar />

        <h1 className="pt-15 font-heading text-[72px] font-semibold leading-[1.15]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        <p className="mt-6 text-gray-200 text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
    </section>
  );
}
