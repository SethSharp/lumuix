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
declare function __VLS_template(): Partial<Record<`header_${string}`, (_: {
    item: Header<string>;
}) => any>> & Partial<Record<`cell_${string}`, (_: {
    item: Row<Header<string>[]>;
}) => any>> & {
    default?(_: {
        item: Row<Header<string>[]>[];
    }): any;
    row_actions?(_: {
        item: Row<Header<string>[]>;
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<DataTableProps<Header<string>[]> & {
    caption?: string;
    rowActions?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<DataTableProps<Header<string>[]> & {
    caption?: string;
    rowActions?: boolean;
}>>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
