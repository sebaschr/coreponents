export type HEADING_STYLES = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type SIZES_TYPES = "sm" | "md" | "lg" | "xl";
export type LINK_TARGETS = "_blank" | "_self";
export type ALIGNMENTS = "left" | "right" | "center";
export type SHAPES = "triangle" | "circle" | "box";
export type BUTTON_VARIANTS =
  | "primary"
  | "secondary"
  | "tertiary"
  | "transparent"
  | "transparent-with-border"
  | "link";
export type MEDIA_GRID_COLUMNS = 1 | 2 | 3 | 4;
export type MEDIA_GRID_MOBILE_COLUMNS = 1 | 2 | 3;

export const VIDEO_EXTENSIONS = [".mp4"];
export const IMAGE_EXTENSIONS = [".gif", ".jpg", ".jpeg", ".png"];
export const YOUTUBE_EXTENSIONS = [
  "youtube.com/embed/",
  "youtu.be/",
  "youtube.com/watch?v=",
];
export type YOUTUBE_EXTENSIONS_TYPE =
  | "youtube.com/embed/"
  | "youtu.be/"
  | "youtube.com/watch?v=";

export const SIZE_SM = "sm";
export const SIZE_MD = "md";
export const SIZE_LG = "lg";
export const SIZE_XL = "xl";

export const BUTTON_PRIMARY: BUTTON_VARIANTS = "primary";
export const BUTTON_SECONDARY: BUTTON_VARIANTS = "secondary";
export const BUTTON_TERTIARY: BUTTON_VARIANTS = "tertiary";
export const BUTTON_TRANSPARENT: BUTTON_VARIANTS = "transparent";
export const BUTTON_TRANSPARENT_WITH_BORDER: BUTTON_VARIANTS =
  "transparent-with-border";
export const BUTTON_LINK: BUTTON_VARIANTS = "link";

export const ALIGNMENT_LEFT: ALIGNMENTS = "left";
export const ALIGNMENT_RIGHT: ALIGNMENTS = "right";
export const ALIGNMENT_CENTER: ALIGNMENTS = "center";

export const YOUTUBE_EMBED: YOUTUBE_EXTENSIONS_TYPE = "youtube.com/embed/";
export const YOUTUBE_WATCH: YOUTUBE_EXTENSIONS_TYPE = "youtube.com/watch?v=";
export const YOUTUBE_SHORTENED: YOUTUBE_EXTENSIONS_TYPE = "youtu.be/";

//IMAGE
export const IMAGE_STRING: string = "IMAGE";

//BOOLEAN
export const BOOLEAN_FALSE: boolean = false;
export const BOOLEAN_TRUE: boolean = true;

//LINKS
export const LINK_TARGET_EXTERNAL: LINK_TARGETS = "_blank";
export const LINK_TARGET_INTERNAL: LINK_TARGETS = "_self";

//BREAKPOINTS
export const BREAKPOINT_TABLET_MIN: number = 768;
export const BREAKPOINT_DESKTOP_MIN: number = 1024;

export type ICON_NAMES =
  | "burger"
  | "es"
  | "en"
  | "x"
  | "arrow-up"
  | "linkedin"
  | "github";

//Shapes
export const SHAPE_BOX: SHAPES = "box";
export const SHAPE_CIRCLE: SHAPES = "circle";
export const SHAPE_TRIANGLE: SHAPES = "triangle";

export const SOCIALS_ICONS = {
  Github: "github",
  LinkedIn: "linkedin",
};

export type COLOR_VALUES =
  | "black"
  | "white"
  | "yellow"
  | "grey"
  | "grey-opacity"
  | "grey-light"
  | "light-blue"
  | "blue";

export const COLOR_BLACK: COLOR_VALUES = "black";
export const COLOR_WHITE: COLOR_VALUES = "white";
export const COLOR_YELLOW: COLOR_VALUES = "yellow";
export const COLOR_GREY: COLOR_VALUES = "grey";
export const COLOR_GREY_OPACITY: COLOR_VALUES = "grey-opacity";
export const COLOR_GREY_LIGHT: COLOR_VALUES = "grey-light";
export const COLOR_LIGHT_BLUE: COLOR_VALUES = "light-blue";
export const COLOR_BLUE: COLOR_VALUES = "blue";

export type THEME_VALUES = "light" | "dark" | "navy";

export const THEME_LIGHT: THEME_VALUES = "light";
export const THEME_DARK: THEME_VALUES = "dark";

export type ThemeStateModel = {
  theme: THEME_VALUES;
  setTheme: any;
};
