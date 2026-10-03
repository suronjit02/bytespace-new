import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function Hero() {
  return (
    <section className="relative h-256 overflow-hidden bg-grid bg-primary text-center text-white">
      {/* student image and bg */}
      <div className="absolute left-1/2 top-144.5 z-0 h-287.5 w-287.5 -translate-x-1/2 rounded-full bg-lime" />
      <Image
        src="/images/hero/student.png"
        alt="Happy student with laptop"
        width={720}
        height={480}
        priority
        className="absolute left-1/2 bottom-0 z-1 -translate-x-1/2"
      />

      {/* 3d ornament */}
      <Image
        src="/images/hero/3d_ornament.png"
        alt=""
        width={1440}
        height={803}
        priority
        className="pointer-events-none absolute left-0 top-55.25 z-0 w-full"
      />

      {/* UI/UX Design card */}
      <div className="absolute left-1/2 top-160 z-2 -ml-80 h-17 w-52 rounded-xl bg-white p-3 text-left text-ink shadow-lg">
        <p className="text-sm font-medium">UI/UX Design</p>
        <p className="mt-1 text-xs text-gray-400">
          200 Courses • 1000+ Students
        </p>
      </div>

      {/* Learning Progress card */}
      <div className="absolute left-1/2 top-163 z-2 ml-30 w-58 rounded-xl bg-white p-4 text-left text-ink shadow-lg">
        <p className="text-xs">Learning Progress</p>
        <p className="mt-1 text-5xl font-semibold">55%</p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-gray-soft">
          <div className="h-full w-[55%] rounded-full bg-lime" />
        </div>
      </div>

      {/* Happy Students card */}
      <div className="absolute left-1/2 top-209 z-2 -ml-98 w-64 rounded-xl bg-white p-4 text-left text-ink shadow-lg">
        <p className="text-sm font-medium">Happy Students</p>
        <p className="text-xs text-gray-400">4.5 (240) ★</p>
        <div className="mt-3 flex items-center">
          <div className="size-8 rounded-full border-2 border-white bg-gray-300" />
          <div className="-ml-2 size-8 rounded-full border-2 border-white bg-gray-400" />
          <div className="-ml-2 size-8 rounded-full border-2 border-white bg-gray-500" />
          <div className="-ml-2 size-8 rounded-full border-2 border-white bg-gray-300" />
          <div className="-ml-2 flex size-8 items-center justify-center rounded-full bg-lime text-xs font-medium">
            2K+
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <h1 className="pt-15 font-heading text-[72px] font-semibold leading-[1.15]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        <p className="mt-6 text-gray-soft text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* search bar */}
        <form className="mx-auto mt-12 flex w-fit items-center gap-4">
          <div className="flex h-12.5 w-115 items-center gap-3 rounded-full bg-white px-5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9a9ca3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="h-11.25 rounded-full bg-lime px-8 text-sm font-medium text-ink transition hover:brightness-95"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
