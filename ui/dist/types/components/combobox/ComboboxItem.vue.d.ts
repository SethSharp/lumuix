import type { ComboboxItemProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
type __VLS_Props = ComboboxItemProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: import("reka-ui", { with: { "resolution-mode": "import" } }).ListboxItemSelectEvent<import("reka-ui", { with: { "resolution-mode": "import" } }).AcceptableValue>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: import("reka-ui", { with: { "resolution-mode": "import" } }).ListboxItemSelectEvent<import("reka-ui", { with: { "resolution-mode": "import" } }).AcceptableValue>) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
