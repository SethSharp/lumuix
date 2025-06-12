import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border h-fit font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        warning: 'bg-warning text-warning-foreground',
      },
      type: {
        outline: '',
        fill: 'border-transparent',
      },
      size: {
        xs: 'px-2 text-xs text-xs',
        sm: 'px-2.5 py-0.5 text-sm',
        md: 'px-2.5 py-1 text-base',
        lg: 'px-3 py-1 text-lg',
      },
    },
    compoundVariants: [
      { type: 'outline', variant: 'primary', class: 'border-primary bg-primary/10 text-primary' },
      {
        type: 'outline',
        variant: 'secondary',
        class: 'border-secondary bg-secondary/10 text-secondary',
      },
      {
        type: 'outline',
        variant: 'destructive',
        class: 'border-destructive bg-destructive/20 text-destructive',
      },
      { type: 'outline', variant: 'warning', class: 'border-warning bg-warning/20 text-warning' },
    ],
    defaultVariants: {
      variant: 'primary',
      type: 'fill',
      size: 'md',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
