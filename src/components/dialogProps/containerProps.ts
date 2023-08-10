import { Skill } from "services/models/models";
import { ALIGNMENTS, THEME_VALUES } from "utils/constants";
import { classNameSizeandChildren, onlyChildren } from "./sharedProps";

type sharedBannerProps = {
    alignment?: ALIGNMENTS;
    heading: string;
    text?: string;
    hasBackground?: boolean;
}

export interface BannerProps extends sharedBannerProps {
    textList?: Skill[];
}

export interface HeroBannerProps extends sharedBannerProps {
    imageSrc?: string;
    imageAlt?: string;
    isBackgroundImage?: boolean;
}

export interface ContainerProps extends classNameSizeandChildren {
    isFullWidth?: boolean;
    overrideTheme?: boolean;
    theme?: THEME_VALUES
};

export interface PageBackgroundProps extends onlyChildren { };