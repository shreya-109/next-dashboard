import HeroTile from "./HeroTile";
export default function BentoGrid() {
  return (
    <section className="grid grid-cols-3 gap-4 p-6 w-full">
      <HeroTile name="Shreya" />
      

      <article className="bg-gray-800 p-6 rounded-xl">
        Activity
      </article>

      <article className="bg-gray-800 p-6 rounded-xl">
        Course 1
      </article>

      <article className="bg-gray-800 p-6 rounded-xl">
        Course 2
      </article>

      <article className="bg-gray-800 p-6 rounded-xl">
        Course 3
      </article>

    </section>
  );
}