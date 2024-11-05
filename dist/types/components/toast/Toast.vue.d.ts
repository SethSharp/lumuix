import { type ToastProps } from '.';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
