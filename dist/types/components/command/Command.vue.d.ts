import { type HTMLAttributes } from 'vue';
import type { ComboboxRootProps } from 'radix-vue';
type __VLS_Props = ComboboxRootProps & {
    class?: HTMLAttributes['class'];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
    "update:open": (value: boolean) => any;
    "update:searchTerm": (value: string) => any;
    "update:selectedValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
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
