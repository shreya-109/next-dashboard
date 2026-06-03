"use client";

export default function ActivityTile() {
  return (
    <article className="bg-gray-800 p-5 rounded-xl col-span-1">
      <h2 className="text-lg font-semibold mb-4">Activity</h2>

      <div className="h-32 flex items-end gap-2">
        <div className="w-4 bg-blue-500 h-10 rounded"></div>
        <div className="w-4 bg-blue-500 h-16 rounded"></div>
        <div className="w-4 bg-blue-500 h-8 rounded"></div>
        <div className="w-4 bg-blue-500 h-20 rounded"></div>
        <div className="w-4 bg-blue-500 h-12 rounded"></div>
      </div>
    </article>
  );
}