import { type DialogContentProps } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
import { type SheetVariants } from '.';
interface SheetContentProps extends DialogContentProps {
    class?: HTMLAttributes['class'];
    side?: SheetVariants['side'];
}
declare var __VLS_14: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SheetContentProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any;
    focusOutside: (event: import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    interactOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<SheetContentProps> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any;
    onOpenAutoFocus?: (event: Event) => any;
    onCloseAutoFocus?: (event: Event) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
