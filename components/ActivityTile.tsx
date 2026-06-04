"use client";

export default function ActivityTile() {
  const data = [30, 60, 40, 80, 50, 90, 70];

  return (
    <article className="col-span-2 bg-zinc-900 rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-4">
        Learning Activity
      </h2>

      <div className="h-32 flex items-end gap-2">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-blue-500 rounded-t-md"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>
    </article>
  );
}