<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { type DropdownMenuItemProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<
  DropdownMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }
>()
</script>

<template>
  <div
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
