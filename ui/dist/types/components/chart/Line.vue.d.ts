import { CurveType } from '@unovis/ts';
type LineAccessor<T = any> = (d: T) => number;
type GenericDataRecord = Record<string, any>;
type LineConfig = {
    y: LineAccessor<GenericDataRecord>;
    color?: string;
    dashArray?: number[];
};
type __VLS_Props = {
    x: LineAccessor;
    lines: LineConfig[];
    curveType?: CurveType;
    lineWidth?: number;
    interpolateMissingData?: boolean;
    fallbackValue?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
