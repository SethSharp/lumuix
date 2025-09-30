type __VLS_Props = {
    class?: string;
    data: any;
    index: number;
};
declare var __VLS_1: {
    item: any;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    dragend: (event: DragEvent) => any;
    dragover: (index: number) => any;
    dragstart: (payload: {
        event: DragEvent;
        data: any;
    }) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDragend?: (event: DragEvent) => any;
    onDragover?: (index: number) => any;
    onDragstart?: (payload: {
        event: DragEvent;
        data: any;
    }) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
