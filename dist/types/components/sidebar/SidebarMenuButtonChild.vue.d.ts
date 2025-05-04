import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { type AsTag, Primitive, type PrimitiveProps } from 'radix-vue';
import { type SidebarMenuButtonVariants, sidebarMenuButtonVariants } from '.';
export interface SidebarMenuButtonProps extends PrimitiveProps {
    as?: AsTag;
    variant?: SidebarMenuButtonVariants['variant'];
    size?: SidebarMenuButtonVariants['size'];
    isActive?: boolean;
    class?: HTMLAttributes['class'];
}
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_6: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_6) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<SidebarMenuButtonProps, {
    cn: typeof cn;
    Primitive: typeof Primitive;
    sidebarMenuButtonVariants: typeof sidebarMenuButtonVariants;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarMenuButtonProps> & Readonly<{}>, {
    as: AsTag;
    size: SidebarMenuButtonVariants["size"];
    variant: SidebarMenuButtonVariants["variant"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<SidebarMenuButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarMenuButtonProps> & Readonly<{}>, {
    as: AsTag;
    size: SidebarMenuButtonVariants["size"];
    variant: SidebarMenuButtonVariants["variant"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
