import { ToastRoot } from 'radix-vue';
import { type ToastProps, toastVariants } from '.';
import { cn } from '@/lib/utils';
declare const forwarded: import("vue").ComputedRef<{
    variant: "default" | "destructive";
    onOpenChange: ((value: boolean) => void) | undefined;
    defaultOpen: boolean;
    forceMount: boolean;
    type: "foreground" | "background";
    open: boolean;
    duration: number;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_10: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_10) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<ToastProps, {
    ToastRoot: typeof ToastRoot;
    toastVariants: typeof toastVariants;
    cn: typeof cn;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pause: () => any;
    "update:open": (value: boolean) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    resume: () => any;
    swipeStart: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    swipeMove: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    swipeCancel: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    swipeEnd: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
}, string, import("vue").PublicProps, Readonly<ToastProps> & Readonly<{
    onPause?: () => any;
    "onUpdate:open"?: (value: boolean) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onResume?: () => any;
    onSwipeStart?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    onSwipeMove?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    onSwipeCancel?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    onSwipeEnd?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<ToastProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pause: () => any;
    "update:open": (value: boolean) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    resume: () => any;
    swipeStart: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    swipeMove: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    swipeCancel: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    swipeEnd: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
}, string, import("vue").PublicProps, Readonly<ToastProps> & Readonly<{
    onPause?: () => any;
    "onUpdate:open"?: (value: boolean) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onResume?: () => any;
    onSwipeStart?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    onSwipeMove?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    onSwipeCancel?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
    onSwipeEnd?: (event: import("../../../node_modules/radix-vue/dist/Toast/utils.js", { with: { "resolution-mode": "import" } }).SwipeEvent) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
