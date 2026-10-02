import { Course } from "@/types/courses";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";

type courseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: courseCardProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-2xl shadow-xs space-y-4">
      <Image width={300} height={200} src={course.image} alt={course.title} />

      {/* Course Details */}
      <div className="flex justify-between items-start text-left">
        <div>
          <h3 className="font-bold text-lg font-heading">
            {course.title.length > 20
              ? `${course.title.substring(0, 20)}...`
              : course.title}
          </h3>
          <p className="text-primary text-sm">
            <span className="text-gray-400">by {""}</span>
            {course.instructor}
          </p>
        </div>
        <span className="text-gray-400 flex gap-1 items-center ">
          <span className="text-gray-600 ">{course.rating}</span>
          <Star className="inline w-4 h-4" />
        </span>
      </div>

      {/* Student Count */}
      <div className="flex justify-start items-center gap-4 text-sm text-gray-400">
        {/* Level */}
        <span className=" flex gap-1 justify-around items-center bg-gray-soft p-2 px-3 rounded-full text-gray-500">
          <ChartNoAxesColumnIncreasing className="inline w-4 h-4  " />
          <span className="text-xs  font-semibold">{course.level}</span>
        </span>{" "}
        {/* Student Images */}
        <div className="flex ">
          {course.students.map((student, index) => (
            <div key={index} className="-ml-2 first:ml-0 ">
              <Image
                width={36}
                height={36}
                className="text-gray-400 text-sm rounded-full "
                src={student.src}
                alt={student.alt || "Student Image"}
              />
            </div>
          ))}
          <span className="text-gray-500 bg-lime rounded-full w-9  flex items-center justify-center text-sm font-bold -ml-2">
            {course.studentCount}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="text-left">
        <span className="text-xl font-bold text-primary font-heading">
          ${course.price}
        </span>
        <span className="text-gray-500 text-xs">/{course.priceType}</span>
      </div>
    </div>
  );
};

export default CourseCard;
