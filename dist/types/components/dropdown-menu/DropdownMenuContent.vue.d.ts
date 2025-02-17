import { type HTMLAttributes } from 'vue';
import { DropdownMenuContent, type DropdownMenuContentProps, DropdownMenuPortal } from 'radix-vue';
import { cn } from '@/lib/utils';
type __VLS_Props = DropdownMenuContentProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    forceMount: boolean;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
    side: import("../../../node_modules/radix-vue/dist/Popper/index.js", { with: { "resolution-mode": "import" } }).Side;
    align: import("../../../node_modules/radix-vue/dist/Popper/index.js", { with: { "resolution-mode": "import" } }).Align;
    alignOffset: number;
    avoidCollisions: boolean;
    collisionBoundary: Element | null | Array<Element | null>;
    collisionPadding: number | Partial<Record<import("../../../node_modules/radix-vue/dist/Popper/index.js", { with: { "resolution-mode": "import" } }).Side, number>>;
    arrowPadding: number;
    sticky: "partial" | "always";
    hideWhenDetached: boolean;
    updatePositionStrategy: "optimized" | "always";
    prioritizePosition: boolean;
    loop: boolean;
    sideOffset: number;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_13: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_13) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    DropdownMenuContent: typeof DropdownMenuContent;
    DropdownMenuPortal: typeof DropdownMenuPortal;
    cn: typeof cn;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    focusOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    interactOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCloseAutoFocus?: (event: Event) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
}>, {
    sideOffset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    focusOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    interactOutside: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCloseAutoFocus?: (event: Event) => any;
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent) => any;
    onFocusOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
    onInteractOutside?: (event: import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).PointerDownOutsideEvent | import("../../../node_modules/radix-vue/dist/DismissableLayer/index.js", { with: { "resolution-mode": "import" } }).FocusOutsideEvent) => any;
}>, {
    sideOffset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
