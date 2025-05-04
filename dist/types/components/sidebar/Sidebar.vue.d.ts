import type { SidebarProps } from '.';
import { Sheet, SheetContent } from '@/components/sheet';
import { cn } from '@/lib/utils';
import { SIDEBAR_WIDTH_MOBILE } from './utils';
declare const isMobile: import("vue").Ref<boolean, boolean>, state: import("vue").ComputedRef<"expanded" | "collapsed">, openMobile: import("vue").Ref<boolean, boolean>, setOpenMobile: (value: boolean) => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {}, __VLS_16: {
    state: "expanded" | "collapsed";
}, __VLS_18: {
    state: "expanded" | "collapsed";
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_16) => any;
} & {
    default?: (props: typeof __VLS_18) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<SidebarProps, {
    Sheet: typeof Sheet;
    SheetContent: typeof SheetContent;
    cn: typeof cn;
    SIDEBAR_WIDTH_MOBILE: typeof SIDEBAR_WIDTH_MOBILE;
    isMobile: typeof isMobile;
    state: typeof state;
    openMobile: typeof openMobile;
    setOpenMobile: typeof setOpenMobile;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarProps> & Readonly<{}>, {
    collapsible: "offcanvas" | "icon" | "none";
    variant: "sidebar" | "floating" | "inset";
    side: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<SidebarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarProps> & Readonly<{}>, {
    collapsible: "offcanvas" | "icon" | "none";
    variant: "sidebar" | "floating" | "inset";
    side: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
