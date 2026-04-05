"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoStrip() {
  const videos: { id: string; title: string; description?: string }[] = [
    { id: "OijIu_6eaf0", title: "Blake Live on Prime TV", description: "" },
    { id: "Cl1rdoEZkIM", title: "Cheating Out Now", description: "" },
    { id: "OtMRMp089dk", title: "Cheating (Official)", description: "" },
  ];

  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  return (
    <section id="videos" className="py-12 bg-[#1f150f] text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl text-amber-300 mb-6 text-center">
          Latest Music Videos
        </h2>

        <div className="flex gap-6 overflow-x-auto px-2 py-2 snap-x snap-mandatory">
          {videos.map((v) => (
            <div
              key={v.id}
              className="snap-center flex-shrink-0 w-[300px] sm:w-[380px] md:w-[460px] rounded-lg overflow-hidden bg-[#24160f] shadow-lg"
            >
              <div className="relative w-full h-[190px] sm:h-[220px] md:h-[260px]">
                {!playing[v.id] ? (
                  <button
                    onClick={() => setPlaying((s) => ({ ...s, [v.id]: true }))}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      fill
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 460px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <svg
                          className="w-7 h-7 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>

              <div className="p-3">
                <h3 className="font-[var(--font-playfair)] text-lg text-amber-300 mb-1">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-2">
                  {v.description || "Official music video & live performances."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
