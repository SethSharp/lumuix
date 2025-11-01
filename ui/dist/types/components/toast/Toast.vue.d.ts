import { type ToastProps } from '.';
declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ToastProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pause: () => any;
    "update:open": (value: boolean) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    resume: () => any;
    swipeStart: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
    swipeMove: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
    swipeCancel: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
    swipeEnd: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
}, string, import("vue").PublicProps, Readonly<ToastProps> & Readonly<{
    onPause?: () => any;
    "onUpdate:open"?: (value: boolean) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onResume?: () => any;
    onSwipeStart?: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
    onSwipeMove?: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
    onSwipeCancel?: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
    onSwipeEnd?: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
