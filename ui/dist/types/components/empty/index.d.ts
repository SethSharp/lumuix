import type { VariantProps } from "class-variance-authority";
export { default as Empty } from "./Empty.vue";
export { default as EmptyContent } from "./EmptyContent.vue";
export { default as EmptyDescription } from "./EmptyDescription.vue";
export { default as EmptyHeader } from "./EmptyHeader.vue";
export { default as EmptyMedia } from "./EmptyMedia.vue";
export { default as EmptyTitle } from "./EmptyTitle.vue";
export declare const emptyMediaVariants: (props?: {
    variant?: "default" | "icon";
} & import("class-variance-authority/dist/types.js").ClassProp) => string;
export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>;
