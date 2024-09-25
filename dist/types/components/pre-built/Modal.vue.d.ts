declare function __VLS_template(): {
    slots: {
        trigger?(_: {}): any;
        header?(_: {}): any;
        description?(_: {}): any;
        content?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<{
    open?: boolean;
    headerData?: {
        title: string;
        description: string;
    };
    size?: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<{
    open?: boolean;
    headerData?: {
        title: string;
        description: string;
    };
    size?: string;
}> & Readonly<{
    onClose?: (...args: any[]) => any;
}>, {
    size: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
