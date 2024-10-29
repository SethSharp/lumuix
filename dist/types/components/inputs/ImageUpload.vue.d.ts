declare function __VLS_template(): {
    slots: {
        image?(_: {
            newImage: string;
            curImage: string;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<{
    modelValue?: any;
    currentImage?: string;
    defaultImage?: string;
    accept?: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<{
    modelValue?: any;
    currentImage?: string;
    defaultImage?: string;
    accept?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    accept: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
