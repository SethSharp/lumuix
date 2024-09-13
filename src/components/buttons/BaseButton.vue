<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { type PrimitiveProps } from 'radix-vue'
import type { ButtonVariants } from '@/components/buttons/index'

interface Props extends PrimitiveProps {
  is?: any
  method?: string
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  is: 'button',
  size: 'default',
})

const sizes = {
  default: 'h-10 px-2',
  xs: 'h-7 rounded px-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
}

const btnSize = sizes[props.size]
</script>

<template>
  <component
    :is="is"
    v-bind="$attrs"
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
    :class="[props.class, btnSize]">
    <slot />
  </component>
</template>
