import { type VariantProps } from 'class-variance-authority';
export { default as Button } from './Button.vue';
export declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "primary" | "destructive" | "outline" | "secondary" | "ghost";
    size?: "default" | "xs" | "sm" | "lg" | "icon";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
