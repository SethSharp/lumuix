import type { HTMLAttributes } from 'vue';
declare function __VLS_template(): {
    slots: {
        trigger?(_: {
            open: boolean;
        }): any;
        content?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<{
    triggerClass?: HTMLAttributes["class"];
    widthClass?: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{
    triggerClass?: HTMLAttributes["class"];
    widthClass?: string;
}> & Readonly<{}>, {
    widthClass: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
