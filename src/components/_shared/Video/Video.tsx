import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import { VideoPropTypes } from "components/dialogProps";
import { checkIfValidYoutubeVideo, formatYoutubeUrl } from "utils/functions";
import Embed from "../Embed";

const Video = ({ src, className, isBackground = false }: VideoPropTypes) => {
  const isYoutube = checkIfValidYoutubeVideo(src);
  if (isYoutube) {
    isBackground = false;
    src = formatYoutubeUrl(src);
  }

  return isYoutube ? (
    <Embed src={src} />
  ) : isBackground ? (
    <BackgroundVideo src={src} className={className} />
  ) : (
    <video className={className} width="400" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
};

export default Video;
