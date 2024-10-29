import { type HTMLAttributes } from 'vue';
import { type RangeCalendarRootProps } from 'radix-vue';
declare const _default: import("vue").DefineComponent<RangeCalendarRootProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("radix-vue").DateRange) => any;
    "update:placeholder": (date: import("@internationalized/date").DateValue) => any;
    "update:startValue": (date: import("@internationalized/date").DateValue) => any;
}, string, import("vue").PublicProps, Readonly<RangeCalendarRootProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    "onUpdate:modelValue"?: (date: import("radix-vue").DateRange) => any;
    "onUpdate:placeholder"?: (date: import("@internationalized/date").DateValue) => any;
    "onUpdate:startValue"?: (date: import("@internationalized/date").DateValue) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
