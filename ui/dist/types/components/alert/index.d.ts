import { type VariantProps } from 'class-variance-authority';
export { default as Alert } from './Alert.vue';
export { default as AlertDescription } from './AlertDescription.vue';
export { default as AlertTitle } from './AlertTitle.vue';
export declare const alertVariants: (props?: {
    variant?: "default" | "destructive" | "warning" | "info" | "success";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type AlertVariants = VariantProps<typeof alertVariants>;
