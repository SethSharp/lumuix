import type { BaseChartProps } from '.';
import { type BulletLegendItemInterface, CurveType } from '@unovis/ts';
import { type Component } from 'vue';
declare const _default: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onLegendItemClick?: (d: BulletLegendItemInterface, i: number) => any;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onLegendItemClick"> & Partial<{}> & (BaseChartProps<T> & {
        /**
         * Render custom tooltip component.
         */
        customTooltip?: Component;
        /**
         * Type of curve
         */
        curveType?: CurveType;
        class?: string;
    })> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: (evt: "legendItemClick", d: BulletLegendItemInterface, i: number) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
