import type { SelectRootProps } from 'radix-vue';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<SelectRootProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
    "update:modelValue": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<SelectRootProps>>> & {
    "onUpdate:open"?: (value: boolean) => any;
    "onUpdate:modelValue"?: (value: string) => any;
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
