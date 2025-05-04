import { type HTMLAttributes } from 'vue';
import { SwitchRoot, type SwitchRootProps, SwitchThumb } from 'radix-vue';
import { cn } from '@/lib/utils';
import { Base } from '@/components/inputs';
type __VLS_Props = SwitchRootProps & {
    modelValue?: boolean | null;
    class?: HTMLAttributes['class'];
};
declare const toggle: import("vue").ModelRef<unknown, string, unknown, unknown>;
declare const forwarded: import("vue").ComputedRef<{
    defaultChecked: boolean;
    checked: boolean;
    disabled: boolean;
    required: boolean;
    name: string;
    id: string;
    value: string;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
    modelValue: boolean | null;
} & Record<string, any>>;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: any;
};
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    checked?: (props: typeof __VLS_14) => any;
} & {
    'not-checked'?: (props: typeof __VLS_16) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_PublicProps, {
    SwitchRoot: typeof SwitchRoot;
    SwitchThumb: typeof SwitchThumb;
    cn: typeof cn;
    Base: typeof Base;
    toggle: typeof toggle;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:checked": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:checked"?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:checked": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:checked"?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
