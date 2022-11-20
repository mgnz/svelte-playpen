export function onscroll(element: Document, listener: (event: Aos.AosEvent) => void): void {
    element.addEventListener('scroll', (e: Event) => listener());
};