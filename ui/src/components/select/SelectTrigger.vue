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
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate',
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
