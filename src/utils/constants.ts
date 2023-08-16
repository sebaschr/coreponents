export type HEADING_STYLES = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type SIZES_TYPES = 'sm' | 'md' | 'lg' | 'xl';
export type LINK_TARGETS = '_blank' | '_self';
export type ALIGNMENTS = 'left' | 'right' | 'center';
export type SHAPES = 'triangle' | 'circle' | 'box';
export type BUTTON_VARIANTS = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'transparent-white' | 'link';

export const SIZE_SM = 'sm';
export const SIZE_MD = 'md';
export const SIZE_LG = 'lg';
export const SIZE_XL = 'xl';

export const BUTTON_PRIMARY: BUTTON_VARIANTS = 'primary';
export const BUTTON_SECONDARY: BUTTON_VARIANTS = 'secondary';
export const BUTTON_TERTIARY: BUTTON_VARIANTS = 'tertiary';
export const BUTTON_TRANSPARENT: BUTTON_VARIANTS = 'transparent';
export const BUTTON_TRANSPARENT_WHITE: BUTTON_VARIANTS = 'transparent-white';
export const BUTTON_LINK: BUTTON_VARIANTS = 'link';

export const ALIGNMENT_LEFT: ALIGNMENTS = 'left';
export const ALIGNMENT_RIGHT: ALIGNMENTS = 'right';
export const ALIGNMENT_CENTER: ALIGNMENTS = 'center';


//IMAGE
export const IMAGE_STRING: string = 'IMAGE';


//BOOLEAN
export const BOOLEAN_FALSE: boolean = false;
export const BOOLEAN_TRUE: boolean = true;

//LINKS
export const LINK_TARGET_EXTERNAL: LINK_TARGETS = '_blank';
export const LINK_TARGET_INTERNAL: LINK_TARGETS = '_self';

//BREAKPOINTS
export const BREAKPOINT_TABLET_MIN: number = 768;
export const BREAKPOINT_DESKTOP_MIN: number = 1024;

export type ICON_NAMES = 'burger' | 'es' | 'en' | 'x' | 'arrow-up' | 'linkedin' | 'github';

//Shapes
export const SHAPE_BOX: SHAPES = 'box';
export const SHAPE_CIRCLE: SHAPES = 'circle';
export const SHAPE_TRIANGLE: SHAPES = 'triangle';

export const SOCIALS_ICONS = {
    "Github": 'github',
    "LinkedIn": 'linkedin',
}

// SCSS STYLES, ANY CHANGES HERE ALSO SHOULD BE APPLIED IN styles/spacing.scss AS WELL
const spacing = {
    'px': '1px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    13: '3.25rem',
    14: '3.5rem',
    15: '3.75rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
}

// SCSS STYLES, ANY CHANGES HERE ALSO SHOULD BE APPLIED IN styles/colors.scss AS WELL
type colors = {
    // Basic Colours
    'black': '#000',
    'white': '#fff',
    'yellow': 'yellow',
    //Greys
    'grey': '#c0c0c0',
    'grey-opacity': '#c0c0c055',
    'grey-light': '#c0c0c0',
}


export type COLOR_VALUES = 'black' | 'white' | 'yellow' | 'grey' | 'grey-opacity' | 'grey-light';

export const COLOR_BLACK: COLOR_VALUES = 'black';
export const COLOR_WHITE: COLOR_VALUES = 'white';
export const COLOR_YELLOW: COLOR_VALUES = 'yellow';
export const COLOR_GREY: COLOR_VALUES = 'grey';
export const COLOR_GREY_OPACITY: COLOR_VALUES = 'grey-opacity';
export const COLOR_GREY_LIGHT: COLOR_VALUES = 'grey-light';


export type THEME_VALUES = 'light' | 'dark' | 'golden';

export const THEME_LIGHT: THEME_VALUES = 'light';
export const THEME_DARK: THEME_VALUES = 'dark';


type ThemeModel = {
    primaryColor: COLOR_VALUES; // Color for all the Texts and Headings
    secondaryColor: COLOR_VALUES; //Color for subtexts
    tertiaryColor: COLOR_VALUES; // Support color
    bgColor: COLOR_VALUES; //Background color for the main Container
    cardBgColor: COLOR_VALUES; //Background color for the Cards inside said Container
}

type ThemeSpacing = {
    name: THEME_VALUES;
    theme: ThemeModel;
}

// SCSS STYLES, ANY CHANGES HERE ALSO SHOULD BE APPLIED IN styles/theming.scss AS WELL
const themes: ThemeSpacing[] = [
    {
        name: THEME_LIGHT,
        theme: {
            primaryColor: 'black', // Color for all the Texts and Headings
            secondaryColor: 'black', //Color for subtexts
            tertiaryColor: 'black', // Support color
            bgColor: 'black', //Background color for the main Container
            cardBgColor: 'black', //Background color for the Cards inside said Container
        }

    },
    {
        name: THEME_DARK,
        theme: {
            primaryColor: 'white', // Color for all the Texts and Headings
            secondaryColor: 'white', //Color for subtexts
            tertiaryColor: 'white', // Support color
            bgColor: 'white', //Background color for the main Container
            cardBgColor: 'white', //Background color for the Cards inside said Container
        }

    }
]