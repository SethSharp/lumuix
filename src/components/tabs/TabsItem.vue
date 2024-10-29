<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  tab: TabOption
}>()
</script>

<template>
  <component
    :is="tab?.is ? tab.is : 'a'"
    :href="tab.href"
    :class="[
      tab.active
        ? 'bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400'
        : 'hover:bg-white dark:hover:bg-slate-900',
      cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',

        props.class,
      ),
    ]">
    <component
      v-if="tab?.icon"
      class="size-5"
      :is="tab.icon" />

    {{ tab.name }}
  </component>
</template>
