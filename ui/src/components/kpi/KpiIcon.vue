<script setup lang="ts">
import { kpiVariants } from '.'
import { type KpiVariants } from '.'
import { cn } from '@/lib/utils'
import { injectKpiContext } from './Kpi.vue'

const variant = <KpiVariants['variant']>injectKpiContext()
</script>

<template>
  <div :class="cn(kpiVariants({ variant }))">
    <slot />
  </div>
</template>
