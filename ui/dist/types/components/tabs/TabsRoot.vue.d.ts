import type { TabsRootProps } from 'radix-vue';
type __VLS_Props = TabsRootProps;
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: import("../../../node_modules/radix-vue/dist/shared/types.js", { with: { "resolution-mode": "import" } }).StringOrNumber) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (payload: import("../../../node_modules/radix-vue/dist/shared/types.js", { with: { "resolution-mode": "import" } }).StringOrNumber) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
