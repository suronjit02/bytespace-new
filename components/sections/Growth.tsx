"use client";

import { Course } from "@/types/courses";
import { useEffect, useState } from "react";
import CourseCard from "../ui/CourseCard";
import Image from "next/image";
import { Check, CircleCheck } from "lucide-react";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function Growth() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const course = courses.find((course: Course) => course.id === 1);

  return (
    <section className="bg-soft-gradient py-24 pb-0 space-y-40">
      <div className="mx-auto grid max-w-300 gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="max-w-xl font-heading text-4xl font-bold leading-tight">
            Your Path to Professional Growth Starts Here!
          </h2>

          <p className="mt-10 max-w-lg text-lg text-gray-500">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="mt-12 flex gap-14">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-base text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* bg card */}
          <div className="max-w-90  z-1">
            {course && <CourseCard course={course} />}
          </div>

          {/* Learning Progress card */}
          <div className="absolute left-1/2 top-50 z-11 ml-15 w-58 rounded-xl bg-white p-4 text-left text-ink shadow-lg">
            <p className="text-xs">Learning Progress</p>
            <p className="mt-1 text-5xl font-semibold">55%</p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-gray-soft">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>

          {/* spring */}
          <Image
            width={210}
            height={210}
            src="/images/spring.png"
            alt="Course Background"
            className="absolute top-15 -right-10 z-12 "
          />

          {/* student image */}
          <Image
            width={300}
            height={200}
            src="/images/hero/student.png"
            alt="Student"
            className="absolute z-10 -bottom-30 right-0 h-120 w-120 object-cover"
          />
        </div>
      </div>

      {/* create and manage */}
      <div className="mx-auto grid items-center max-w-300 gap-12 lg:grid-cols-2">
        {/* left content */}
        <div className="relative">
          {/* Total Revenue Card */}
          <div className="absolute -left-5 top-10 z-10 w-65 rounded-xl bg-primary p-4 text-left text-white">
            <p className="font-heading text-md">Total Revenue</p>
            <p className="mb-2 text-xs text-gray-soft">July 1-28</p>
            <p className="text-xl font-bold">$120.29</p>

            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-soft">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>

          {/* year to date card */}
          <div className="absolute -left-2 top-50 z-10  rounded-xl bg-primary p-4 text-left text-white">
            <p className="font-heading text-md">Year to Date</p>
            <p className="mb-2 text-xs text-gray-soft">2023</p>
            <p className="text-xl font-bold mb-2">$1,200.38</p>
            <span className="rounded-full bg-lime text-ink p-1 px-2 font-semibold text-xs">
              +12$
            </span>
          </div>

          {/* Happy Students card */}
          <div className="absolute right-5 bottom-45 z-35 w-64 rounded-xl bg-white p-4 text-left text-ink shadow-lg">
            <p className="text-md font-heading font-medium">Happy Students</p>
            <p className="text-xs text-gray-400">
              <span className="text-ink font-semibold">4.5</span> (240){" "}
              <span className="text-lime text-xl">★</span>
            </p>
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

          {/* spring */}
          <Image
            width={210}
            height={210}
            src="/images/spring1.png"
            alt="Course Background"
            className="absolute top-30 right-15 z-35 "
          />

          {/* Student Image */}
          <div className="relative z-20">
            <Image
              width={600}
              height={400}
              src="/images/student-female.png"
              alt="Student"
              className="h-180 w-150"
            />
          </div>
        </div>

        {/* right content */}
        <div className="space-y-10">
          <h1 className="font-heading text-5xl font-semibold">
            Create & Manage Courses Easily.
          </h1>
          <p className="text-lg">
            <span className="font-bold">ByteSpace</span> supports individuals or
            entities in the creation, publication, and administration of
            educational courses.{" "}
          </p>

          <ul className="space-y-4 text-xl text-ink font-semibold">
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary font-extrabold text-white">
                <Check className="h-5 w-5" />
              </span>
              Share Your Expertise
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary font-extrabold text-white">
                <Check className="h-5 w-5" />
              </span>{" "}
              Monetize Your Passion
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary font-extrabold text-white">
                <Check className="h-5 w-5" />
              </span>{" "}
              Flexibility and Autonomy
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary font-extrabold text-white">
                <Check className="h-5 w-5" />
              </span>{" "}
              Build a Community
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
