import { type HTMLAttributes } from 'vue';
import { type SelectContentProps } from 'radix-vue';
type __VLS_Props = SelectContentProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_18: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_18) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    onCloseAutoFocus?: (event: Event) => any;
}>, {
    position: "item-aligned" | "popper";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
