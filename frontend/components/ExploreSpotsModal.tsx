"use client";

import { ExploreSpot } from "@/lib/exploreSpots";

export default function ExploreSpotsModal({
  country,
  spots,
  onClose,
}: {
  country: string;
  spots: ExploreSpot[];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-navy-700 bg-navy-800 p-6 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg text-ivory">Explore</h3>
            <p className="text-xs text-mute">{country}</p>
          </div>
          <button onClick={onClose} className="text-mute hover:text-ivory">✕</button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {spots.map((spot) => (
            <a
              key={spot.name}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-navy-600"
            >
              <img
                src={`https://picsum.photos/seed/${spot.imageSeed}/300/300`}
                alt={spot.name}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent p-2 pt-6">
                <p className="text-xs font-medium text-ivory">{spot.name}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-mute/60">Tap a spot to open directions in Maps</p>
      </div>
    </div>
  );
}
