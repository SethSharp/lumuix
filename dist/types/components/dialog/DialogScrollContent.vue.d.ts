import { X } from 'lucide-vue-next';
import { type HTMLAttributes } from 'vue';
import { DialogClose, DialogContent, type DialogContentProps, DialogOverlay, DialogPortal } from 'radix-vue';
import { cn } from '@/lib/utils';
type __VLS_Props = DialogContentProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    forceMount: boolean;
    trapFocus: boolean;
    disableOutsidePointerEvents: boolean;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_18: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_18) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    X: typeof X;
    DialogClose: typeof DialogClose;
    DialogContent: typeof DialogContent;
    DialogOverlay: typeof DialogOverlay;
    DialogPortal: typeof DialogPortal;
    cn: typeof cn;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    focusOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    interactOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCloseAutoFocus?: (event: Event) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onOpenAutoFocus?: (event: Event) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    focusOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    interactOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCloseAutoFocus?: (event: Event) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onOpenAutoFocus?: (event: Event) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
