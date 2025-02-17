import { type HTMLAttributes } from 'vue';
import { DropdownMenuItem, type DropdownMenuItemProps } from 'radix-vue';
import BaseDropdownMenuItem from './BaseDropdownMenuItem.vue';
type __VLS_Props = DropdownMenuItemProps & {
    class?: HTMLAttributes['class'];
    inset?: boolean;
    as?: any;
    href?: string;
    method?: string;
};
declare const forwardedProps: import("vue").ComputedRef<{
    disabled: boolean;
    textValue: string;
    asChild: boolean;
    inset: boolean;
    href: string;
    method: string;
    as: any;
}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_12: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_12) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    DropdownMenuItem: typeof DropdownMenuItem;
    BaseDropdownMenuItem: typeof BaseDropdownMenuItem;
    forwardedProps: typeof forwardedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
