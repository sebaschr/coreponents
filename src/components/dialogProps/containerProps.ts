import { Skill } from "services/models/models";
import { COLOR_VALUES, ALIGNMENTS, THEME_VALUES, LINK_TARGETS } from "utils/constants";
import { classNameSizeandChildren, onlyChildren } from "./sharedProps";

type sharedBannerProps = {
    alignment?: ALIGNMENTS;
    heading: string;
    text?: string;
    backgroundColor?: COLOR_VALUES;

    primaryBtnText?: string;
    primaryBtnHref?: string;
    primaryBtnTarget?: LINK_TARGETS;

    secondaryBtnText?: string;
    secondaryBtnHref?: string;
    secondaryBtnTarget?: LINK_TARGETS;

}

export interface BannerProps extends sharedBannerProps {
    textList?: Skill[];
}

export interface HeroBannerProps extends sharedBannerProps {
    imageSrc?: string;
    imageAlt?: string;
    backgroundImageSrc?: string;
    imageFirst?: boolean
    hideOnMobile?: boolean;

}

export interface ContainerProps extends classNameSizeandChildren {
    isFullWidth?: boolean;
    overrideTheme?: boolean;
    theme?: THEME_VALUES
};

export interface PageBackgroundProps extends onlyChildren { };