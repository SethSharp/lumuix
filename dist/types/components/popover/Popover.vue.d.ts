import { PopoverRoot } from 'radix-vue';
import type { PopoverRootProps } from 'radix-vue';
declare const forwarded: import("vue").ComputedRef<Readonly<import("@vue/shared").LooseRequired<PopoverRootProps>> & {
    readonly open: boolean;
    readonly defaultOpen: boolean;
    readonly modal: boolean;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_7: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_7) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<PopoverRootProps, {
    PopoverRoot: typeof PopoverRoot;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<PopoverRootProps> & Readonly<{
    "onUpdate:open"?: (value: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<PopoverRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<PopoverRootProps> & Readonly<{
    "onUpdate:open"?: (value: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
