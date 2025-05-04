import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { type Component } from 'vue';
import SidebarMenuButtonChild, { type SidebarMenuButtonProps } from './SidebarMenuButtonChild.vue';
type __VLS_Props = SidebarMenuButtonProps & {
    tooltip?: string | Component;
};
declare const isMobile: import("vue").Ref<boolean, boolean>, state: import("vue").ComputedRef<"expanded" | "collapsed">;
declare const delegatedProps: import("vue").ComputedRef<{
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag;
    variant: import("./index.js", { with: { "resolution-mode": "import" } }).SidebarMenuButtonVariants["variant"];
    size: import("./index.js", { with: { "resolution-mode": "import" } }).SidebarMenuButtonVariants["size"];
    isActive: boolean;
    class: import("vue").HTMLAttributes["class"];
    asChild: boolean;
}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_5: {}, __VLS_19: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_5) => any;
} & {
    default?: (props: typeof __VLS_19) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    Tooltip: typeof Tooltip;
    TooltipContent: typeof TooltipContent;
    TooltipTrigger: typeof TooltipTrigger;
    SidebarMenuButtonChild: typeof SidebarMenuButtonChild;
    isMobile: typeof isMobile;
    state: typeof state;
    delegatedProps: typeof delegatedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
