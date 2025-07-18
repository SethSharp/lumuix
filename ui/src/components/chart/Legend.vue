<script setup lang="ts">
import { VisBulletLegend } from '@unovis/vue'

defineProps<{
  items: {
    name: string,
    color: string
  }[]
}>()
</script>

<template>
  <VisBulletLegend v-bind="$props" />
</template>