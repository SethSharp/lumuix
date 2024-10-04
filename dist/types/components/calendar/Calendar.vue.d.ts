import { type HTMLAttributes } from 'vue';
import { type CalendarRootProps } from 'radix-vue';
declare const _default: import("vue").DefineComponent<CalendarRootProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("@internationalized/date").DateValue) => any;
    "update:placeholder": (date: import("@internationalized/date").DateValue) => any;
}, string, import("vue").PublicProps, Readonly<CalendarRootProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    "onUpdate:modelValue"?: (date: import("@internationalized/date").DateValue) => any;
    "onUpdate:placeholder"?: (date: import("@internationalized/date").DateValue) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
