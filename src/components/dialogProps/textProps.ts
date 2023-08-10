import { classNameColorandSize } from './sharedProps';
import { HEADING_STYLES } from "utils/constants";

interface sharedTextProps extends classNameColorandSize {
    content: string;
}

export interface HeadingProps extends sharedTextProps {
    headingStyle?: HEADING_STYLES;
}

export interface TextProps extends sharedTextProps { }