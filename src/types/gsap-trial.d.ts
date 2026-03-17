declare module "gsap-trial/SplitText" {
    export class SplitText {
        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];
        constructor(
            target:
                | string
                | string[]
                | Element
                | Element[]
                | NodeList
                | ArrayLike<Element>,
            vars?: Record<string, unknown>
        );
        revert(): void;
    }
}
