import type { HTMLAttributes } from 'vue';
import { type NavigationMenuLinkProps } from 'reka-ui';
type __VLS_Props = NavigationMenuLinkProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (payload: CustomEvent<{
        originalEvent: Event;
    }>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (payload: CustomEvent<{
        originalEvent: Event;
    }>) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
