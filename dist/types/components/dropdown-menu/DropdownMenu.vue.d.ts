import { type DropdownMenuRootProps } from 'radix-vue';
declare var __VLS_6: {
    open: boolean;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<DropdownMenuRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (payload: boolean) => any;
}, string, import("vue").PublicProps, Readonly<DropdownMenuRootProps> & Readonly<{
    "onUpdate:open"?: (payload: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
