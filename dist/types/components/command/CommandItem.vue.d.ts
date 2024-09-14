import { type HTMLAttributes } from 'vue';
import type { ComboboxItemProps } from 'radix-vue';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<ComboboxItemProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ComboboxItemProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}>>> & {
    onSelect?: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => any;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
