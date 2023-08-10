import { noChildren, classNameSizeandAltText } from "./sharedProps";
import { ICON_NAMES, SHAPES } from "utils/constants";

interface sharedMediaProps extends classNameSizeandAltText {
    src: string;
    isBackground?: boolean;
}

export interface IconProps extends noChildren {
    name: ICON_NAMES;
    label?: string;
}

export interface ImageProps extends sharedMediaProps {
    shape?: SHAPES; //Shapes are only applicable for non-background images
}

export interface VideoProps extends sharedMediaProps { }
