import { type HTMLAttributes } from 'vue';
import { DropdownMenuCheckboxItem, type DropdownMenuCheckboxItemProps, DropdownMenuItemIndicator } from 'radix-vue';
import { Check } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
type __VLS_Props = DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    checked: import("../../../node_modules/radix-vue/dist/Menu/utils.js", { with: { "resolution-mode": "import" } }).CheckedState;
    disabled: boolean;
    textValue: string;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_19: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_19) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    DropdownMenuCheckboxItem: typeof DropdownMenuCheckboxItem;
    DropdownMenuItemIndicator: typeof DropdownMenuItemIndicator;
    Check: typeof Check;
    cn: typeof cn;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => any;
    "update:checked": (payload: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: Event) => any;
    "onUpdate:checked"?: (payload: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => any;
    "update:checked": (payload: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: Event) => any;
    "onUpdate:checked"?: (payload: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
