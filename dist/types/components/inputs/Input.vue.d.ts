type __VLS_Props = {
    modelValue?: string;
    type?: string;
    disabled?: boolean;
    placeholder?: string;
    error?: string;
    required?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: any;
} & __VLS_Props;
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: (value: any) => any;
}>, {
    type: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
