import React from "react";
import Project from "./Project";
import { describe } from "node:test";

const projectInfo = [
  {
    title: "Greenthread",
    language: "Java, XML, Android Studio, Figma",
    description: "Initially envisioned in Figma and partially developed in Java during the Hello Hacks Hackathon. I later took the initiative to  bring our idea to life with Android Studio, XML, and Java. Integrated a custom Adapter object to allow for filtered searching. Leveraged the ZXing barcode scanner library to implement a QR code scanner.",
    video: "e6GuBbAyd2o?si=sitKWmwp6YMSXFZS",
    repo: "https://github.com/Brian-Soh/Greenthread",
    color: "text-green-600",
    hover: "hover:text-green-600"
  },
  {
    title: "Blackjack Card Counting Trainer",
    language: "Java",
    description:
      "An extension of classic Blackjack that provides the user statistics on the true and running count. Employed object-oriented programming in Java to enhance code efficiency and reusability. Implemented a save and load functionality for all objects and game data by writing and parsing JSON files",
    video: "wsBcOIIEG-8?si=0BSfqTlkjE8VZy8N",
    repo: "https://github.com/Brian-Soh/Blackjack-Card-Counting-Trainer",
    color: "text-red-600",
    hover: "hover:text-red-600"
  },
  {
    title: "Space Invaders",
    language: "Dr. Racket",
    description:
      "A Space Invaders remake that manages real-time user input, translating key presses and mouse clicks into game actions. Integrated multiple algorithms such as alien movement and bullet collision detection.",
    video: "4jL1b_ZDG-s?si=-ImTFhnfwc-ogmrH",
    repo: "https://github.com/Brian-Soh/Space-Invaders",
    color: "text-blue-600",
    hover: "hover:text-blue-600"

  },
  {
    title: "Under Construction...",
    language: "Coming Soon!",
    description: "Stay tuned for my upcoming projects! Currently learning C/C++ in my courses.",
    video: "92r-Gm8XpsI?si=YjRGqW8anMSwhztn",
    repo: "https://github.com/Brian-Soh",
    color: "text-white",
    hover: "hover:text-white"
  }
];

const MyProjects = () => {
  return (
    <section className="pb-8 mb-20" id="projects">
      <h2 className="mt-10 mb-28 text-center text-4xl">Projects</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {projectInfo.map((info, index) => (
          <Project
            key={index}
            title={info.title}
            language={info.language}
            description={info.description}
            video={info.video}
            repo={info.repo}
            color={info.color}
            hover={info.hover}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
