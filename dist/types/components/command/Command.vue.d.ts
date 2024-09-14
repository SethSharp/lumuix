import { type HTMLAttributes } from 'vue';
import type { ComboboxRootProps } from 'radix-vue';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}>, {
    open: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
    "update:modelValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => void;
    "update:searchTerm": (value: string) => void;
    "update:selectedValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}>, {
    open: boolean;
}>>> & {
    "onUpdate:open"?: (value: boolean) => any;
    "onUpdate:modelValue"?: (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
    "onUpdate:searchTerm"?: (value: string) => any;
    "onUpdate:selectedValue"?: (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
}, {
    open: boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
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
