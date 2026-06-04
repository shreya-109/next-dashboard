import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-black text-white">
      <Sidebar />
      <BentoGrid />
    </main>
  );
}