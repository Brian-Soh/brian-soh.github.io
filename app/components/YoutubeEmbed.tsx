import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    embedId: string;
  }

const YoutubeEmbed = ({ embedId }: Props) => (
  <div className="col-span-6 video-responsive">
    <iframe
      width="fill"
      height="fill"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;