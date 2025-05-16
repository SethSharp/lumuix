import { type HTMLAttributes } from 'vue';
import type { ComboboxContentProps } from 'radix-vue';
type __VLS_Props = ComboboxContentProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    focusOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    interactOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
}>, {
    dismissable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
