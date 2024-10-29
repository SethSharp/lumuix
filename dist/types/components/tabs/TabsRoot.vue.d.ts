import type { TabsRootProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<TabsRootProps<import("radix-vue/dist/shared/types").StringOrNumber>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: import("radix-vue/dist/shared/types").StringOrNumber) => any;
}, string, import("vue").PublicProps, Readonly<TabsRootProps<import("radix-vue/dist/shared/types").StringOrNumber>> & Readonly<{
    "onUpdate:modelValue"?: (payload: import("radix-vue/dist/shared/types").StringOrNumber) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
