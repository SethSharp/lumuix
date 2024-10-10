type ModelValue = Option[] | Option | number | null | string;
declare const _default: import("vue").DefineComponent<{
    modelValue: ModelValue;
    placeholder?: string;
    emptyMessage?: string;
    options: Option[];
    multiple?: boolean;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<{
    modelValue: ModelValue;
    placeholder?: string;
    emptyMessage?: string;
    options: Option[];
    multiple?: boolean;
}> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
