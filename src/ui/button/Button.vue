<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { type PrimitiveProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type ButtonVariants, buttonVariants } from './index'

interface Props extends PrimitiveProps {
  is?: any
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  is: 'button',
})
</script>

<template>
  <component
    :is="is"
    v-bind="$attrs"
    :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </component>
</template>
