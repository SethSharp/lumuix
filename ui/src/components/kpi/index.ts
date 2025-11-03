import { cva, type VariantProps } from 'class-variance-authority'

export { default as Kpi } from './Kpi.vue'
export { default as KpiContent } from './KpiContent.vue'
export { default as KpiCount } from './KpiCount.vue'
export { default as KpiIcon } from './KpiIcon.vue'
export { default as KpiTitle } from './KpiTitle.vue'

export const kpiVariants = cva(
  'p-4 rounded-md flex-shrink-0 flex justify-center items-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary/10 text-primary shadow-sm hover:bg-primary/80',
        destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/70',
        warning: 'bg-warning/10 text-warning hover:bg-warning/70',
        success: 'bg-green-500/10 text-green-500 hover:bg-green-500/70',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export type KpiVariants = VariantProps<typeof kpiVariants>