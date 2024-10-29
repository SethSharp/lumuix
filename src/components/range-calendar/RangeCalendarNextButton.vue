<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { MoveRight } from 'lucide-vue-next'
import { RangeCalendarNext, type RangeCalendarNextProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/button'

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarNext
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot>
      <MoveRight class="size-4" />
    </slot>
  </RangeCalendarNext>
</template>
