// src/components/ui/YouTubeSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Video } from "@/lib/youtube";

interface Props {
  videos: Video[];
}

export default function YouTubeSection({ videos }: Props) {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  const openPlayer = (id: string) => {
    setPlaying((p) => ({ ...p, [id]: true }));
  };

  return (
    <section id="videos" className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-cyan-300 font-[var(--font-cormorant)] mb-10 text-center">
          Latest Music Videos
        </h2>

        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory px-2">
          {videos.slice(0, 8).map((video) => (   // ✅ Only take up to 8 videos
            <article
              key={video.id}
            >
              <div className="bg-blue-900 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px]">
                  {!playing[video.id] ? (
                    <button
                      onClick={() => openPlayer(video.id)}
                      className="relative w-full h-full"
                      aria-label={`Play ${video.title}`}
                    >
                      {video.thumbnail ? (
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 460px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700" />
                      )}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/40 p-4">
                          <svg
                            className="w-8 h-8 text-white"
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
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </div>

                <div className="p-3">
                  <h3 className="font-[var(--font-cormorant)] text-lg sm:text-xl text-cyan-300 mb-1">
                    {video.title}
                  </h3>
                  <p className="font-[var(--font-poppins)] text-sm sm:text-base text-slate-300 leading-snug line-clamp-3">
                    {video.description || "No description available."}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
