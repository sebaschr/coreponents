import { BREAKPOINT_DESKTOP_MIN } from './constants'

export function reportWindowSize(): boolean {
    return window.innerWidth >= BREAKPOINT_DESKTOP_MIN;
}

export function getGlobalClasses(classes: string[], values: string[]): string {
    let globalClasses = "";

    classes.forEach((classToAdd, index) => {
        if (classToAdd === 'alignment') {
            globalClasses += ` alignment--${values[index]}`;
        }

        if (classToAdd === 'backgroundColor') {
            globalClasses += ` background-color--${values[index]}`;
        }
    })

    return globalClasses;
}