"use client";

import { useEffect, useState } from "react";
import CourseCard from "../ui/CourseCard";
import type { Course } from "../../types/courses";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function Courses() {
  const [active, setActive] = useState("Featured");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <section className="bg-white px-6 py-20 text-center">
      <h2 className="font-heading text-4xl font-semibold leading-tight">
        Discover Your Passion, <br /> Build Your Skills
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-sm text-gray-400">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-xs transition ${
              active === c
                ? "bg-lime font-medium"
                : "bg-gray-soft hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
        <button className="px-2 py-2 text-xs text-primary">+ More</button>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
