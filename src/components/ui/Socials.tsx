"use client";

import Link from "next/link";
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaPlay,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { SiAudiomack } from "react-icons/si";

const socialLinks = [
  {
    href: "https://open.spotify.com/artist/your-artist-id",
    label: "Spotify",
    icon: (
      <FaSpotify
        size={28}
        className="text-white hover:text-green-500 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://music.apple.com/artist/your-artist-id",
    label: "Apple Music",
    icon: (
      <FaApple
        size={28}
        className="text-white hover:text-black transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://soundcloud.com/your-artist-id",
    label: "SoundCloud",
    icon: (
      <FaSoundcloud
        size={28}
        className="text-white hover:text-orange-400 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://www.youtube.com/channel/your-channel-id",
    label: "YouTube",
    icon: (
      <FaYoutube
        size={28}
        className="text-white hover:text-red-500 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://www.boomplay.com/artists/your-artist-id",
    label: "Boomplay",
    icon: (
      <FaPlay
        size={28}
        className="text-white hover:text-blue-500 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://audiomack.com/your-artist-id",
    label: "Audiomack",
    icon: (
      <SiAudiomack
        size={28}
        className="text-white hover:text-yellow-400 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://facebook.com/your-artist-id",
    label: "Facebook",
    icon: (
      <FaFacebook
        size={28}
        className="text-white hover:text-blue-600 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://instagram.com/your-artist-id",
    label: "Instagram",
    icon: (
      <FaInstagram
        size={28}
        className="text-white hover:text-pink-500 transition-colors duration-200"
      />
    ),
  },
  {
    href: "https://x.com/your-artist-id",
    label: "X (Twitter)",
    icon: (
      <FaXTwitter
        size={28}
        className="text-white hover:text-black transition-colors duration-200"
      />
    ),
  },
];

function Socials() {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-4 sm:gap-5">
      {socialLinks.map(({ href, label, icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center justify-center w-10 h-10"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
