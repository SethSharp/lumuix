import type { BulletLegendItemInterface } from '@unovis/ts';
type __VLS_Props = {
    items: BulletLegendItemInterface[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    legendItemClick: (d: BulletLegendItemInterface, i: number) => any;
    "update:items": (payload: BulletLegendItemInterface[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLegendItemClick?: (d: BulletLegendItemInterface, i: number) => any;
    "onUpdate:items"?: (payload: BulletLegendItemInterface[]) => any;
}>, {
    items: BulletLegendItemInterface[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
