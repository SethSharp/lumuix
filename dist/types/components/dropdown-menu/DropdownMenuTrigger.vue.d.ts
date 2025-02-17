import { DropdownMenuTrigger, type DropdownMenuTriggerProps } from 'radix-vue';
declare const forwardedProps: import("vue").ComputedRef<import("vue").DefineProps<import("@vue/shared").LooseRequired<DropdownMenuTriggerProps>, "disabled" | "asChild">>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_7: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_7) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<DropdownMenuTriggerProps, {
    DropdownMenuTrigger: typeof DropdownMenuTrigger;
    forwardedProps: typeof forwardedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DropdownMenuTriggerProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<DropdownMenuTriggerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DropdownMenuTriggerProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
