import { BREAKPOINT_DESKTOP_MIN } from './constants'

export function reportWindowSize(): boolean {
    return window.innerWidth >= BREAKPOINT_DESKTOP_MIN;
}
