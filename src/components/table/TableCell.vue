<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    class="p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0"
    :class="props.class">
    <slot />
  </td>
</template>
