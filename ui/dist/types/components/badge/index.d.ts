import { type VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge.vue';
export declare const badgeVariants: (props?: {
    variant?: "destructive" | "warning" | "primary" | "secondary";
    type?: "fill" | "outline";
    size?: "xs" | "sm" | "md" | "lg";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
