<script setup lang="ts">
import { LoaderCircleIcon } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type ButtonVariants, spinnerSize, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
    <LoaderCircleIcon
      v-if="loading"
      :class="spinnerSize({ size: size })" />
  </Primitive>
</template>
