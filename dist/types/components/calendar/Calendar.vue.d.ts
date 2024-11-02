import { type HTMLAttributes } from 'vue';
import { type CalendarRootProps } from 'radix-vue';
type __VLS_Props = CalendarRootProps & {
    class?: HTMLAttributes['class'];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("@internationalized/date").DateValue) => any;
    "update:placeholder": (date: import("@internationalized/date").DateValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (date: import("@internationalized/date").DateValue) => any;
    "onUpdate:placeholder"?: (date: import("@internationalized/date").DateValue) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
