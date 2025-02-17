import { type HTMLAttributes } from 'vue';
import TableRow from './TableRow.vue';
import TableCell from './TableCell.vue';
import { cn } from '@/lib/utils';
type __VLS_Props = {
    class?: HTMLAttributes['class'];
    colspan?: number;
};
declare const delegatedProps: import("vue").ComputedRef<{
    colspan: number;
}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_11: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_11) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    TableRow: typeof TableRow;
    TableCell: typeof TableCell;
    cn: typeof cn;
    delegatedProps: typeof delegatedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    colspan: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    colspan: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLTableRowElement>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
