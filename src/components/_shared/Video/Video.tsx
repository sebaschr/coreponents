import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import { VideoPropTypes } from "components/dialogProps";

const Video = ({ src, className, isBackground = false }: VideoPropTypes) => {
  return isBackground ? (
    <BackgroundVideo src={src} className={className} />
  ) : (
    <video className={className} width="400" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
};

export default Video;
