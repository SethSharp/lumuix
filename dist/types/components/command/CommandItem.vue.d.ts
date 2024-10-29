import { type HTMLAttributes } from 'vue';
import type { ComboboxItemProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<ComboboxItemProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => any;
}, string, import("vue").PublicProps, Readonly<ComboboxItemProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onSelect?: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
