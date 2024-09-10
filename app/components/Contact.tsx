import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const linkedin = () => {
  window.open(`https://www.linkedin.com/in/jasonwkuo/`);
};
const github = () => {
  window.open(`https://github.com/jkuo630`, "_blank", "noreferrer,noopener");
};
const email = () => {
  window.open(`mailto:jasonkuo630@gmail.com`, "_blank", "noreferrer,noopener");
};
const Contact = () => {
  return (
    <section className="pb-8 mb-20" id="contact">
      <div className="text-center">
        <h2 className="mt-10 text-center text-4xl">Let's Stay in Touch!</h2>
        <p className="my-12 text-xl">Feel free to follow my socials!</p>
        <p style={{color: "red"}} className="font-semibold text-xl">
          brian.soh.cs@gmail.com
        </p>
        <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/brian-soh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: "white" }} size={50} />
            </a>
            <a
              href="https://github.com/brian-soh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: "white" }} size={50} />
            </a>
            <a
              href="mailto:brian.soh.cs@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope style={{ color: "white" }} size={50} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
