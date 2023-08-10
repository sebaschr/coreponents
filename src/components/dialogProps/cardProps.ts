import { SHAPES, LINK_TARGETS } from "utils/constants";
import { classNameandChildren, onlyClassName } from "./sharedProps";

export interface CardProps extends onlyClassName {
    shape?: SHAPES;
    imageSrc?: string;
    heading: string;
    text?: string;
    href?: string;
    target?: LINK_TARGETS;
    asButton?: boolean;
    hasBorder?: boolean;
}

export interface CardContainerProps extends classNameandChildren { };