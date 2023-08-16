import { classNameColorandSize } from './sharedProps';
import { ALIGNMENTS, HEADING_STYLES } from "utils/constants";

interface sharedTextProps extends classNameColorandSize {
    content: string;
    alignment?: ALIGNMENTS;
}

export interface HeadingProps extends sharedTextProps {
    headingStyle?: HEADING_STYLES;
}

export interface TextProps extends sharedTextProps { }