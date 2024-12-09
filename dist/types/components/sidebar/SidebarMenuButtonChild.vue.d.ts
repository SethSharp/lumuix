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
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<SidebarMenuButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarMenuButtonProps> & Readonly<{}>, {
    as: AsTag;
    size: SidebarMenuButtonVariants["size"];
    variant: SidebarMenuButtonVariants["variant"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
