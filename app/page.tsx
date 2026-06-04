import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 text-white">
      <Sidebar />

      <section className="grid grid-cols-3 gap-6 p-8 w-full">
        <HeroTile name="Shreya" />
        <ActivityTile />
        <BentoGrid />
      </section>
    </main>
  );
}