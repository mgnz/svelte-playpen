import { select } from "./select"

export function on(type: any, selector: any, listener: any, all: boolean | null = false): any {
    let element = select(selector, all);
    if (element) {
        if (all) {
            element.forEach((e: any) => e.addEventListener(type, listener));
        } else {
            element.addEventListener(type, listener);
        }
    }
};
