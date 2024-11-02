type Header<Value extends string = string> = {
    value: Value;
    name: string;
};
type Row<Headers extends readonly Header[]> = {
    [K in Headers[number] as K['value']]: string | number;
};
type DataTableProps<Headers extends readonly Header[]> = {
    headers: Headers;
    rows: Array<Row<Headers>>;
};
type __VLS_Props = DataTableProps<Header[]> & {
    caption?: string;
    rowActions?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`header_${string}`, (_: {
        item: Header<string>;
    }) => any>> & Partial<Record<`cell_${string}`, (_: {
        item: Row<Header<string>[]>;
    }) => any>> & {
        row_actions?(_: {
            item: Row<Header<string>[]>;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
