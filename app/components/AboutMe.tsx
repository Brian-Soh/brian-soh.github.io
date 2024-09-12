import React from "react";
import { HeroImage } from "./images";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="my-28" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="animated animated-text">
            <span className="mb-4 ">Hey, I'm </span>
            <div className="animated-info">
              <span className="animated-item">Brian</span>
              <span className="animated-item">a Developer</span>
              <span className="animated-item ">a Student</span>
            </div>
          </h1>
          <p className="text-lg mb-6 lg:text-xl">
            Full-time student double majoring in Business and Computer Science
            at the University of British Columbia. I have an interest in
            software engineering and its applications.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12">
              <a
                href="https://drive.google.com/file/d/1DztaBjZfifYLnsUYYXjc9SforOVaConW/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center col-span-6 px-6 py-3 my-2 font-semibold rounded-xl mr-4 bg-white hover:bg-slate-200 hover:text-red-600 text-black"
              >
                View my Resume
              </a>
              <a
                href="https://www.linkedin.com/in/brian-soh/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center col-span-6 px-6 py-3 my-2 font-semibold rounded-xl mr-4 bg-red-600 hover:bg-red-700	 text-white"
              >
                Connect on LinkedIn
              </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <Image
            src={HeroImage}
            alt="placeholder"
            className="mx-auto "
            width={700}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
