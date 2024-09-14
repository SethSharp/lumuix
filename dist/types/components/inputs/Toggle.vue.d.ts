import { type HTMLAttributes } from 'vue';
import { type SwitchRootProps } from 'radix-vue';
declare let __VLS_typeProps: SwitchRootProps & {
    modelValue?: boolean | null;
    class?: HTMLAttributes['class'];
    id?: string;
    label?: string;
};
type __VLS_PublicProps = {
    modelValue?: any;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    checked?(_: {}): any;
    "not-checked"?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": ((modelValue: any) => void) & ((...args: any[]) => void);
    "update:checked": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_PublicProps>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:checked"?: (...args: any[]) => any;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
