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
declare var __VLS_23: `header_${string}`, __VLS_24: {
    item: Header<string>;
}, __VLS_39: `cell_${string}`, __VLS_40: {
    item: Row<Header<string>[]>;
}, __VLS_46: {
    item: Row<Header<string>[]>;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_23>]?: (props: typeof __VLS_24) => any;
} & {
    [K in NonNullable<typeof __VLS_39>]?: (props: typeof __VLS_40) => any;
} & {
    row_actions?: (props: typeof __VLS_46) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
