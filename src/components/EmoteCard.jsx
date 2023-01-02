import React from "react";

export default function EmoteCard({ emote }) {
  return (
    <div className="flex items-center overflow-hidden bg-teal-300 rounded-lg shadow-lg">
      <img className="flex-shrink-0 w-32 h-32" src={emote.imageUrl} alt={emote.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-800">{emote.emoteName}</h3>

        <p className="text-lg text-gray-600">{emote.unlocked} </p>
        
      </div>
    </div>
  );
}