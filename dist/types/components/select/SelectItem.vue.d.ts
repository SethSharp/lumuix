import { type HTMLAttributes } from 'vue';
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText } from 'radix-vue';
import { Check } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
type __VLS_Props = SelectItemProps & {
    class?: HTMLAttributes['class'];
};
declare const forwardedProps: import("vue").ComputedRef<{
    value: string;
    disabled: boolean;
    textValue: string;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
}>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_25: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_25) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    SelectItem: typeof SelectItem;
    SelectItemIndicator: typeof SelectItemIndicator;
    SelectItemText: typeof SelectItemText;
    Check: typeof Check;
    cn: typeof cn;
    forwardedProps: typeof forwardedProps;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
