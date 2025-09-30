export declare const injectDraggableRootContext: <T extends unknown = unknown>(fallback?: T) => T extends null ? unknown : unknown, provideDraggableRootContext: (contextValue: unknown) => unknown;
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<{
    class?: string;
    data: any;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    drop: (payload: DragEvent) => any;
}, string, import("vue").PublicProps, Readonly<{
    class?: string;
    data: any;
}> & Readonly<{
    onDrop?: (payload: DragEvent) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
