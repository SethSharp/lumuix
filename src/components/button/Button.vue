<script setup lang="ts">
import { LoaderCircleIcon } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
  spinner?: ButtonVariants['spinner']
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
      :class="cn(buttonVariants({ spinner }), 'animate-spin')" />
  </Primitive>
</template>
