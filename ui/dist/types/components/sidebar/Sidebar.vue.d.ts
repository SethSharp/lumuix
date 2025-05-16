import type { SidebarProps } from '.';
declare var __VLS_1: {}, __VLS_16: {
    state: "expanded" | "collapsed";
}, __VLS_18: {
    state: "expanded" | "collapsed";
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_16) => any;
} & {
    default?: (props: typeof __VLS_18) => any;
};
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
