type Header<Value extends string = string> = {
    value: Value;
    name: string;
};
type Row<Headers extends readonly Header[]> = {
    [K in Headers[number] as K['value']]: string | number;
};
type CollapsibleTableRowProps<Headers extends readonly Header[]> = {
    row: Row<Headers>;
    headers: Headers;
    subRows?: Array<Row<Headers>>;
};
type __VLS_Props = CollapsibleTableRowProps<Header[]> & {
    setOpenTo?: boolean;
    class?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`cell_header_${string}`, (_: {
        item: Row<Header<string>[]>;
        open: boolean;
    }) => any>> & Partial<Record<`subrow_cell_${string}`, (_: {
        item: Row<Header<string>[]>;
        open: true;
    }) => any>> & {
        row_actions?(_: {
            item: Row<Header<string>[]>;
        }): any;
        sub_row_actions?(_: {
            item: Row<Header<string>[]>;
            open: true;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    setOpenTo: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
