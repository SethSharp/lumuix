import { type HTMLAttributes } from 'vue';
import { type DropdownMenuCheckboxItemProps } from 'radix-vue';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => void;
    "update:checked": (payload: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}>>> & {
    onSelect?: (event: Event) => any;
    "onUpdate:checked"?: (payload: boolean) => any;
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
