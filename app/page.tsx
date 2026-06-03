import Sidebar from "@/components/Sidebar";
import CourseCard from "@/components/CourseCard";
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    console.log(error);
  }

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <Sidebar />

      <section className="grid grid-cols-3 gap-6 p-8 w-full">

        {/* Hero Tile */}
        <HeroTile name="Shreya" />

        {/* Activity Tile */}
        <ActivityTile />

        {/* Course Cards */}
        {data?.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            progress={course.progress}
          />
        ))}

      </section>
    </main>
  );
}