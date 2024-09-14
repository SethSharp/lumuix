import type { HTMLAttributes } from 'vue';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    modelValue?: string | number;
    class?: HTMLAttributes["class"];
    placeholder?: string;
    error?: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: string | number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    modelValue?: string | number;
    class?: HTMLAttributes["class"];
    placeholder?: string;
    error?: string;
}>>> & {
    "onUpdate:modelValue"?: (payload: string | number) => any;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
