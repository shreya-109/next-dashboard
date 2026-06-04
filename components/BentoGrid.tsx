"use client";

import CourseCard from "./CourseCard";

export default function BentoGrid() {
  const courses = [
    { id: 1, title: "DSA", progress: 70 },
    { id: 2, title: "Web Dev", progress: 50 },
  ];

  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          progress={course.progress}
        />
      ))}
    </>
  );
}