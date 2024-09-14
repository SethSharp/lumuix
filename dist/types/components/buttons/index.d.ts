import { type VariantProps } from 'class-variance-authority';
export { default as Button } from './Button.vue';
export declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "outline" | "primary" | "destructive" | "secondary" | "ghost";
    size?: "default" | "icon" | "xs" | "sm" | "lg";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
