"use client";
import React from "react";
import {
  CSSLogo,
  CppLogo,
  HTMLLogo,
  JavaLogo,
  JavaScriptLogo,
  PythonLogo,
  ReactLogo,
  SqlLogo,
  TypeScriptLogo,
} from "./images";
import Logo from "./Logo";



const Languages = [
  {
    image: PythonLogo,
    duration: 3,
  },
  {
    image: CppLogo,
    duration: 2,
  },
  {
    image: JavaLogo,
    duration: 5,
  },
  
  {
    image: ReactLogo,
    duration: 4,
  },
  {
    image: TypeScriptLogo,
    duration: 2,
  },
  {
    image: JavaScriptLogo,
    duration: 6,
  },
  {
    image: HTMLLogo,
    duration: 3,
  },
  {
    image: CSSLogo,
    duration: 4,
  },
  {
    image: SqlLogo,
    duration: 3,
  }
];

const MyLanguages = () => {
  return (
    <section className="pb-8 mb-28 md:mb-40" id="languages">
      <h2 className="mt-10 mb-28 md:mb-40 text-center text-4xl">Languages</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:w-9/12 mx-auto">
        {Languages.map((language, index) => (
          <Logo key={index} image={language.image} duration={language.duration}/>
        ))}
      </div>
    </section>
  );
};

export default MyLanguages;