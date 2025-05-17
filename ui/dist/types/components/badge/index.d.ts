import { type VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge.vue';
export declare const badgeVariants: (props?: {
    variant?: "primary" | "secondary" | "destructive" | "warning";
    type?: "fill" | "outline-solid";
    size?: "xs" | "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
