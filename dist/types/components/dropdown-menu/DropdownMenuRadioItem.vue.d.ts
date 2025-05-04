import { type HTMLAttributes } from 'vue';
import { DropdownMenuItemIndicator, DropdownMenuRadioItem, type DropdownMenuRadioItemProps } from 'radix-vue';
import { Circle } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
type __VLS_Props = DropdownMenuRadioItemProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    value: string;
    disabled: boolean;
    textValue: string;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_14: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_14) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    DropdownMenuItemIndicator: typeof DropdownMenuItemIndicator;
    DropdownMenuRadioItem: typeof DropdownMenuRadioItem;
    Circle: typeof Circle;
    cn: typeof cn;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: Event) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: Event) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
