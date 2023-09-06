import {
  BREAKPOINT_DESKTOP_MIN,
  VIDEO_EXTENSIONS,
  IMAGE_EXTENSIONS,
  YOUTUBE_EXTENSIONS,
  YOUTUBE_SHORTENED,
  YOUTUBE_WATCH,
} from "./constants";

export function reportWindowSize(): boolean {
  return window.innerWidth >= BREAKPOINT_DESKTOP_MIN;
}

export function getGlobalClasses(classes: string[], values: string[]): string {
  let globalClasses = "";

  classes.forEach((classToAdd, index) => {
    if (classToAdd === "alignment") {
      globalClasses += ` alignment--${values[index]}`;
    }

    if (classToAdd === "backgroundColor") {
      globalClasses += ` background-color--${values[index]}`;
    }
    if (classToAdd === "border") {
      globalClasses += ` border`;
    }
  });

  return globalClasses;
}

function getFileExtension(filename: string) {
  var ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? "" : "." + ext[1];
}

export function checkIfValidYoutubeVideo(url: string): boolean {
  let isYouTube = false;
  YOUTUBE_EXTENSIONS.forEach((validYoutubeUrl) => {
    if (url.includes(validYoutubeUrl)) {
      isYouTube = true;
    }
  });

  return isYouTube;
}

export function formatYoutubeUrl(url: string): string {
  const EMBED = "https://www.youtube.com/embed/";

  if (url.includes(YOUTUBE_WATCH)) {
    return EMBED + url.split("/watch?v=")[1];
  } else {
    if (url.includes(YOUTUBE_SHORTENED)) {
      return EMBED + url.split("youtu.be/")[1];
    }
  }
  return url;
}

export function checkIfValidMedia(mediaSrc: string): string {
  const fileExtension = getFileExtension(mediaSrc);
  const checkIfYoutube = checkIfValidYoutubeVideo(mediaSrc);

  if (VIDEO_EXTENSIONS.includes(fileExtension) || checkIfYoutube) {
    return "video";
  }

  if (IMAGE_EXTENSIONS.includes(fileExtension)) {
    return "image";
  }

  return null;
}
