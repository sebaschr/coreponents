import React from "react";
import { Image, Video } from "components";
import { checkIfValidMedia } from "utils/functions";
import { sharedMediaProps } from "components/dialogProps/mediaProps";

const Media = (props: sharedMediaProps) => {
  const isValidMedia = checkIfValidMedia(props.src);
  const isVideo = isValidMedia === "video";
  const isImage = isValidMedia === "image";

  return isVideo ? <Video {...props} /> : isImage ? <Image {...props} /> : null;
};

export default Media;
