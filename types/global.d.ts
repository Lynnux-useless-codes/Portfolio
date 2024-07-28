// global.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        'ion-icon': React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement>;
    }
}

declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
}