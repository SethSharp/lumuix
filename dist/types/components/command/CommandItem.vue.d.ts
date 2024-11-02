import { type HTMLAttributes } from 'vue';
import type { ComboboxItemProps } from 'radix-vue';
type __VLS_Props = ComboboxItemProps & {
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
    select: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
