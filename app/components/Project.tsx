import React, { ReactNode } from "react";
import YoutubeEmbed from "./YoutubeEmbed";

interface Props {
  children?: ReactNode;
  title: string;
  language: string;
  description: string;
  video: string;
  repo: string;
  color: string;
  hover: string;
}

const Project = ({
  title,
  language,
  description,
  video,
  repo,
  color,
  hover
}: Props) => {
  return (
    <div className="col-span-6 flex align-center flex-col rounded-2xl border-4 border-neutral-800 p-4 mb-11">
      <YoutubeEmbed embedId={video} />
      <h2 className={`text-2xl font-semibold my-4 ${color}`}>{title}</h2>
      <p className="text-xl mb-4 font-semibold ">{language}</p>
      <p className="text-lg lg:text-xl">{description}</p>
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className={`${hover} flex justify-center px-6 py-3 mt-8 font-semibold rounded-xl mr-4 bg-white hover:bg-slate-200 text-black`}
      >
        Visit Repo
      </a>
    </div>
  );
};

export default Project;
