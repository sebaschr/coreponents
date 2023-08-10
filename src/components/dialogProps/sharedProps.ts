import { SIZES_TYPES } from 'utils/constants';
import { ReactNode } from 'react';

// Standalone properties
export type onlyClassName = {
    className?: string,
}

export type onlyColor = {
    color?: string,
}

export type onlySize = {
    size?: SIZES_TYPES,
}

export type onlyAltText = {
    altText?: string,
}

export type onlyChildren = {
    children?: ReactNode,
}

// Duo Properties

export interface classNameandColor extends onlyClassName, onlyColor { };
export interface classNameandSize extends onlyClassName, onlySize { };
export interface classNameandAltText extends onlyClassName, onlyAltText { };
export interface classNameandChildren extends onlyClassName, onlyChildren { };

export interface colorAndSize extends onlyColor, onlySize { };
export interface colorAndAltText extends onlyColor, onlyAltText { };
export interface colorAndChildren extends onlyColor, onlyChildren { };

export interface sizeAndAltText extends onlySize, onlyAltText { };
export interface sizeAndChildren extends onlySize, onlyChildren { };

export interface altTextAndChildren extends onlyAltText, onlyChildren { };

// Trios 

export interface classNameColorandSize extends classNameandColor, onlySize { };
export interface classNameColorandAltText extends classNameandColor, onlyAltText { };
export interface classNameColorandChildren extends classNameandColor, onlyChildren { };
export interface classNameSizeandAltText extends classNameandSize, onlyAltText { };
export interface classNameSizeandChildren extends classNameandSize, onlyChildren { };
export interface classNameAltTextandChildren extends classNameandAltText, onlyChildren { };
export interface colorSizeandAltText extends colorAndSize, onlyAltText { };
export interface colorSizeandChildren extends colorAndSize, onlyChildren { };
export interface colorAltTextandChildren extends colorAndAltText, onlyChildren { };
export interface sizeAltTextandChildren extends sizeAndAltText, onlyChildren { };

// Quadrups

export interface noChildren extends classNameColorandSize, onlyAltText { };
export interface noAltText extends classNameColorandSize, onlyChildren { };
export interface noColor extends classNameSizeandAltText, onlyChildren { };
export interface noSize extends classNameColorandAltText, onlyChildren { };
export interface noClassName extends colorSizeandAltText, onlyChildren { };

export interface sharedProps extends noChildren, onlyChildren { };