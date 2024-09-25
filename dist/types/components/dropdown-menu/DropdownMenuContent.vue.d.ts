import { type HTMLAttributes } from 'vue';
import { type DropdownMenuContentProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<DropdownMenuContentProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any;
    focusOutside: (event: import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    interactOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<DropdownMenuContentProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    onCloseAutoFocus?: (event: Event) => any;
}>, {
    sideOffset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
