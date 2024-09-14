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
declare function __VLS_template(): Partial<Record<`cell_header_${string}`, (_: {
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
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<CollapsibleTableRowProps<Header<string>[]> & {
    setOpenTo?: boolean;
    class?: string;
}>, {
    setOpenTo: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<CollapsibleTableRowProps<Header<string>[]> & {
    setOpenTo?: boolean;
    class?: string;
}>, {
    setOpenTo: boolean;
}>>>, {
    setOpenTo: boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
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
