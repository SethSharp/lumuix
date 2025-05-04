import { type HTMLAttributes } from 'vue';
import { MoveRight } from 'lucide-vue-next';
import { RangeCalendarNext, type RangeCalendarNextProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/button';
type __VLS_Props = RangeCalendarNextProps & {
    class?: HTMLAttributes['class'];
};
declare const forwardedProps: import("vue").ComputedRef<{
    step: import("../../../node_modules/radix-vue/dist/shared/date/index.js", { with: { "resolution-mode": "import" } }).CalendarIncrement;
    nextPage: (placeholder: import("@internationalized/date").DateValue) => import("@internationalized/date").DateValue;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_6: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_6) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    MoveRight: typeof MoveRight;
    RangeCalendarNext: typeof RangeCalendarNext;
    cn: typeof cn;
    buttonVariants: typeof buttonVariants;
    forwardedProps: typeof forwardedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
