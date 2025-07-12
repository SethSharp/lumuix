interface BaseAxisProps {
  label: string,
}

export interface YAxisProps extends BaseAxisProps {
  position?: 'left' | 'right'
  x?: any
}

export interface XAxisProps extends BaseAxisProps {
  position?: 'bottom' | 'top'
  y?: any
}

export { default as XAxis } from './XAxis.vue'
export { default as YAxis } from './YAxis.vue'
export { default as ChartProvider } from './ChartProvider.vue'
export { default as Line } from './Line.vue'