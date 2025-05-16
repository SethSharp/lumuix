import { type HTMLAttributes } from 'vue';
import { type DropdownMenuItemProps } from 'radix-vue';
type __VLS_Props = DropdownMenuItemProps & {
    class?: HTMLAttributes['class'];
    inset?: boolean;
    as?: any;
    href?: string;
    method?: string;
};
declare var __VLS_9: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
