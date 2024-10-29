import { type HTMLAttributes } from 'vue';
import type { ComboboxRootProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
    "update:open": (value: boolean) => any;
    "update:searchTerm": (value: string) => any;
    "update:selectedValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
}, string, import("vue").PublicProps, Readonly<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    "onUpdate:modelValue"?: (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
    "onUpdate:open"?: (value: boolean) => any;
    "onUpdate:searchTerm"?: (value: string) => any;
    "onUpdate:selectedValue"?: (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
}>, {
    open: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
