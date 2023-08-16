import { noColor } from "./sharedProps";
import { BUTTON_VARIANTS, LINK_TARGETS, ICON_NAMES, SIZES_TYPES } from "utils/constants";

type sharedLinkProps = {
    linkText?: string;
    iconName?: ICON_NAMES;
    iconSize?: SIZES_TYPES;
}

export interface LinkProps extends sharedLinkProps, noColor {
    href: string;
    target: LINK_TARGETS;
}

export interface ButtonProps extends sharedLinkProps, noColor {
    variant: BUTTON_VARIANTS;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    label?: string;
    href?: string;
    target?: LINK_TARGETS;
}
