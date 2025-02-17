import { cn } from '@/lib/utils';
import { TooltipContent, type TooltipContentProps, TooltipPortal } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
type __VLS_Props = TooltipContentProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    forceMount: boolean;
    ariaLabel: string;
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
    sideOffset: number;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_12: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_12) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    cn: typeof cn;
    TooltipContent: typeof TooltipContent;
    TooltipPortal: typeof TooltipPortal;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: Event) => any;
}>, {
    sideOffset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: Event) => any;
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
