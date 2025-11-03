<script setup lang="ts">
import { type KpiVariants } from '.'

const props = withDefaults(defineProps<{
  variant?: KpiVariants['variant']
}>(), {
  variant: 'primary'
})

provideKpiContext(props.variant)
</script>

<script lang="ts">
import { createContext } from '@/lib/createContext'

export const [injectKpiContext, provideKpiContext]
  = createContext('KpiRoot')
</script>

<template>
  <div class="rounded-lg p-4 bg-card border border-card-border flex gap-4 items-center">
    <slot />
  </div>
</template>
