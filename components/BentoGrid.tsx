"use client";

import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

export default function BentoGrid() {
  const courses = [
    { id: 1, title: "DSA", progress: 70 },
    { id: 2, title: "Web Dev", progress: 50 },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-6 w-full">
      <HeroTile />

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          progress={course.progress}
        />
      ))}

      <ActivityTile />
    </section>
  );
}