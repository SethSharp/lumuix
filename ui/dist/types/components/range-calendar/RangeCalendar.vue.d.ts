import { type HTMLAttributes } from 'vue';
import { type RangeCalendarRootProps } from 'radix-vue';
type __VLS_Props = RangeCalendarRootProps & {
    class?: HTMLAttributes['class'];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("radix-vue", { with: { "resolution-mode": "import" } }).DateRange) => any;
    "update:placeholder": (date: import("reka-ui", { with: { "resolution-mode": "import" } }).DateValue) => any;
    "update:startValue": (date: import("reka-ui", { with: { "resolution-mode": "import" } }).DateValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (date: import("radix-vue", { with: { "resolution-mode": "import" } }).DateRange) => any;
    "onUpdate:placeholder"?: (date: import("reka-ui", { with: { "resolution-mode": "import" } }).DateValue) => any;
    "onUpdate:startValue"?: (date: import("reka-ui", { with: { "resolution-mode": "import" } }).DateValue) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
