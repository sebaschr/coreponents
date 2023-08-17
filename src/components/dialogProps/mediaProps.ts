import { noChildren, classNameSizeandAltText, classNameandAltText } from "./sharedProps";
import { ICON_NAMES, SHAPES } from "utils/constants";


export interface sharedMediaProps extends classNameSizeandAltText {
    src: string;
    isBackground?: boolean;
    shape?: SHAPES; //Shapes are only applicable for non-background images
}

export interface IconProps extends noChildren {
    name: ICON_NAMES;
    label?: string;
}

export interface ImageProps extends sharedMediaProps {
}

export interface VideoProps extends sharedMediaProps { };

export interface EmbedProps extends classNameandAltText {
    src: string;
};
