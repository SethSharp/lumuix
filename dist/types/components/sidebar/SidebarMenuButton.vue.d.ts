import { type Component } from 'vue';
import { type SidebarMenuButtonProps } from './SidebarMenuButtonChild.vue';
type __VLS_Props = SidebarMenuButtonProps & {
    tooltip?: string | Component;
};
declare var __VLS_5: {}, __VLS_19: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    default?: (props: typeof __VLS_19) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
