import type { HTMLAttributes } from 'vue';
import { type AsTag, type PrimitiveProps } from 'radix-vue';
import { type SidebarMenuButtonVariants } from '.';
export interface SidebarMenuButtonProps extends PrimitiveProps {
    as?: AsTag;
    variant?: SidebarMenuButtonVariants['variant'];
    size?: SidebarMenuButtonVariants['size'];
    isActive?: boolean;
    class?: HTMLAttributes['class'];
}
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
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
