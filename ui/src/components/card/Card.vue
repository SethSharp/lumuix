<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('bg-card border border-card rounded-lg shadow-xs', props.class)
    ">
    <slot />
  </div>
</template>
