import { cn } from '@/lib/utils';
import { TooltipProvider } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './utils';
type __VLS_Props = {
    defaultOpen?: boolean;
    open?: boolean;
    class?: HTMLAttributes['class'];
};
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_6: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_6) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    cn: typeof cn;
    TooltipProvider: typeof TooltipProvider;
    SIDEBAR_WIDTH: typeof SIDEBAR_WIDTH;
    SIDEBAR_WIDTH_ICON: typeof SIDEBAR_WIDTH_ICON;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (open: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: (open: boolean) => any;
}>, {
    open: boolean;
    defaultOpen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (open: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: (open: boolean) => any;
}>, {
    open: boolean;
    defaultOpen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
