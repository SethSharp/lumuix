import type { HTMLAttributes } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue?: string | number;
    class?: HTMLAttributes["class"];
    placeholder?: string;
    error?: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string | number) => any;
}, string, import("vue").PublicProps, Readonly<{
    modelValue?: string | number;
    class?: HTMLAttributes["class"];
    placeholder?: string;
    error?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: (payload: string | number) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
