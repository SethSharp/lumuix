declare function __VLS_template(): {
    slots: {
        selectedOptions?(_: {
            selectedOptions: number | Option | Option[];
        }): any;
        item?(_: {
            option: Option;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<{
    modelValue: [] | number | null;
    placeholder?: string;
    noResults?: string;
    options: Option[];
    multiple?: boolean;
    allowSearch?: boolean;
    widthClass?: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<{
    modelValue: [] | number | null;
    placeholder?: string;
    noResults?: string;
    options: Option[];
    multiple?: boolean;
    allowSearch?: boolean;
    widthClass?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    widthClass: string;
    placeholder: string;
    multiple: boolean;
    noResults: string;
    allowSearch: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
