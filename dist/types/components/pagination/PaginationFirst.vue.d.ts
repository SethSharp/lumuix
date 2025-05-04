import { ChevronsLeft } from 'lucide-vue-next';
import { type HTMLAttributes } from 'vue';
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { Button } from '@/components/button';
type __VLS_Props = PaginationFirstProps & {
    class?: HTMLAttributes['class'];
    as?: any;
};
declare const delegatedProps: import("vue").ComputedRef<{
    as: any;
    asChild: boolean;
}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_10: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_10) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    ChevronsLeft: typeof ChevronsLeft;
    PaginationFirst: typeof PaginationFirst;
    cn: typeof cn;
    Button: typeof Button;
    delegatedProps: typeof delegatedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    asChild: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    asChild: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
