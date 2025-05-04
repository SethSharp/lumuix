import { TableRow, TableCell, TableRowAction } from '@/components/table/index';
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
declare const isOpen: import("vue").Ref<boolean, boolean>;
declare const toggleOpen: () => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_14: `cell_header_${string}`, __VLS_15: {
    item: Row<Header<string>[]>;
    open: boolean;
}, __VLS_21: {
    item: Row<Header<string>[]>;
}, __VLS_32: `subrow_cell_${string}`, __VLS_33: {
    item: Row<Header<string>[]>;
    open: true;
}, __VLS_39: {
    item: Row<Header<string>[]>;
    open: true;
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_14>]?: (props: typeof __VLS_15) => any;
} & {
    [K in NonNullable<typeof __VLS_32>]?: (props: typeof __VLS_33) => any;
} & {
    row_actions?: (props: typeof __VLS_21) => any;
} & {
    sub_row_actions?: (props: typeof __VLS_39) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    TableRow: typeof TableRow;
    TableCell: typeof TableCell;
    TableRowAction: typeof TableRowAction;
    isOpen: typeof isOpen;
    toggleOpen: typeof toggleOpen;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    setOpenTo: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    setOpenTo: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
