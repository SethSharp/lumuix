<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes['class']
    open?: boolean
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'border-input bg-muted ring-offset-background text-text focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-0 hover:bg-muted/50 dark:focus:ring-slate-800 [&>span]:truncate',
        props.class,
      )
    ">
    <slot />
    <SelectIcon as-child>
      <ChevronDown
        class="size-4 shrink-0 opacity-50 transition"
        :class="open ? 'rotate-180' : ''" />
    </SelectIcon>
  </SelectTrigger>
</template>
