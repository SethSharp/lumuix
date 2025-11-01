import { type ComboboxRootProps } from 'reka-ui';
type __VLS_Props = ComboboxRootProps;
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("reka-ui", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
    highlight: (payload: {
        ref: HTMLElement;
        value: import("reka-ui", { with: { "resolution-mode": "import" } }).AcceptableValue;
    }) => any;
    "update:open": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (value: import("reka-ui", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
    onHighlight?: (payload: {
        ref: HTMLElement;
        value: import("reka-ui", { with: { "resolution-mode": "import" } }).AcceptableValue;
    }) => any;
    "onUpdate:open"?: (value: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
