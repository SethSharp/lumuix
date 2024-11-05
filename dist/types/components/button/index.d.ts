import { type VariantProps } from 'class-variance-authority';
export { default as Button } from './Button.vue';
export declare const buttonVariants: (props?: {
    variant?: "default" | "link" | "primary" | "secondary" | "destructive" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
