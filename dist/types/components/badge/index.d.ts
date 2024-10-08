import { type VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge.vue';
export declare const badgeVariants: (props?: {
    variant?: "default" | "primary" | "secondary" | "destructive" | "outline";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
