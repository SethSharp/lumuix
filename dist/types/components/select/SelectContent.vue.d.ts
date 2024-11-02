import { type HTMLAttributes } from 'vue';
import { type SelectContentProps } from 'radix-vue';
type __VLS_Props = SelectContentProps & {
    class?: HTMLAttributes['class'];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any;
    onCloseAutoFocus?: (event: Event) => any;
}>, {
    position: "item-aligned" | "popper";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
