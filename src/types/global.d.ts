/// <reference types="react" />
/// <reference types="react-dom" />

// React 19 compatibility declarations
declare module 'react' {
    // Re-export everything from React
    export * from 'react';
}

// Global JSX namespace extension
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }

        interface Element extends React.ReactElement<any, any> { }
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }
    }
}

// Framer Motion - Complete type declarations for React 19
declare module 'framer-motion' {
    import type * as React from 'react';

    export interface MotionProps extends Omit<React.HTMLAttributes<any>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        variants?: any;
        whileHover?: any;
        whileTap?: any;
        whileFocus?: any;
        whileInView?: any;
        drag?: boolean | 'x' | 'y';
        dragConstraints?: any;
        dragElastic?: any;
        dragMomentum?: any;
        dragPropagation?: any;
        dragSnapToOrigin?: any;
        dragTransition?: any;
        onDrag?: any;
        onDragStart?: any;
        onDragEnd?: any;
        onDirectionLock?: any;
        onAnimationStart?: any;
        onAnimationComplete?: any;
        onUpdate?: any;
        layout?: boolean | 'position' | 'size';
        layoutId?: string;
        layoutDependency?: any;
        layoutScroll?: boolean;
        style?: React.CSSProperties;
        className?: string;
        children?: React.ReactNode;
        [key: string]: any;
    }

    export interface MotionComponent<P = {}, E = HTMLElement>
        extends React.ForwardRefExoticComponent<MotionProps & P & React.RefAttributes<E>> { }

    export const motion: {
        div: MotionComponent<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        span: MotionComponent<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        a: MotionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        button: MotionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        img: MotionComponent<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        section: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        article: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        nav: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        header: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        main: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: MotionComponent<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        p: MotionComponent<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        h1: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        ul: MotionComponent<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        ol: MotionComponent<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        li: MotionComponent<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        form: MotionComponent<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        input: MotionComponent<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        textarea: MotionComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        select: MotionComponent<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        label: MotionComponent<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        svg: MotionComponent<React.SVGProps<SVGSVGElement>, SVGSVGElement>;
        path: MotionComponent<React.SVGProps<SVGPathElement>, SVGPathElement>;
        circle: MotionComponent<React.SVGProps<SVGCircleElement>, SVGCircleElement>;
        rect: MotionComponent<React.SVGProps<SVGRectElement>, SVGRectElement>;
        [key: string]: MotionComponent<any, any>;
    };

    export interface AnimatePresenceProps {
        children?: React.ReactNode;
        initial?: boolean;
        mode?: 'sync' | 'wait' | 'popLayout';
        custom?: any;
        onExitComplete?: () => void;
        presenceAffectsLayout?: boolean;
    }

    export const AnimatePresence: React.FC<AnimatePresenceProps>;

    export interface Variants {
        [key: string]: any;
    }

    export function useAnimation(): any;
    export function useMotionValue(initial: any): any;
    export function useTransform(value: any, inputRange: any, outputRange: any, options?: any): any;
    export function useSpring(source: any, config?: any): any;
    export function useScroll(options?: any): any;
    export function useInView(options?: any): any;
}

// Next.js Image - Enhanced declarations
declare module 'next/image' {
    import type * as React from 'react';

    export interface StaticImageData {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
        blurWidth?: number;
        blurHeight?: number;
    }

    export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'> {
        src: string | StaticImageData;
        alt: string;
        width?: number | `${number}`;
        height?: number | `${number}`;
        fill?: boolean;
        loader?: (args: { src: string; width: number; quality?: number }) => string;
        quality?: number | `${number}`;
        priority?: boolean;
        loading?: 'lazy' | 'eager';
        placeholder?: 'blur' | 'empty' | `data:image/${string}`;
        blurDataURL?: string;
        unoptimized?: boolean;
        overrideSrc?: string;
        onLoadingComplete?: (img: HTMLImageElement) => void;
        onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
        onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
        layout?: string;
        objectFit?: string;
        objectPosition?: string;
        lazyBoundary?: string;
        lazyRoot?: string;
    }

    const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
    export default Image;
}

// Next.js Link - Enhanced declarations
declare module 'next/link' {
    import type * as React from 'react';

    export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
        href: string | { pathname?: string; query?: any; hash?: string };
        as?: string | { pathname?: string; query?: any; hash?: string };
        replace?: boolean;
        scroll?: boolean;
        shallow?: boolean;
        passHref?: boolean;
        prefetch?: boolean;
        locale?: string | false;
        legacyBehavior?: boolean;
        onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
        onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }

    const Link: React.ForwardRefExoticComponent<
        React.PropsWithChildren<LinkProps> & React.RefAttributes<HTMLAnchorElement>
    >;
    export default Link;
}

// Tabler Icons - Complete declarations
declare module '@tabler/icons-react' {
    import type * as React from 'react';

    export interface IconProps extends React.SVGProps<SVGSVGElement> {
        size?: number | string;
        color?: string;
        stroke?: number | string;
    }

    export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

    // Common icons
    export const IconLayoutSidebarRightCollapse: Icon;
    export const IconHome: Icon;
    export const IconUser: Icon;
    export const IconMail: Icon;
    export const IconBriefcase: Icon;
    export const IconFolder: Icon;
    export const IconMessage: Icon;
    export const IconBrandGithub: Icon;
    export const IconBrandLinkedin: Icon;
    export const IconBrandTwitter: Icon;
    export const IconSun: Icon;
    export const IconMoon: Icon;
    export const IconMenu: Icon;
    export const IconX: Icon;
    export const IconChevronRight: Icon;
    export const IconChevronLeft: Icon;
    export const IconArrowRight: Icon;
    export const IconArrowLeft: Icon;
    export const IconExternalLink: Icon;
    export const IconDownload: Icon;

    // Catch-all for any other icon
    const icons: { [key: string]: Icon };
    export default icons;
}

export { };
