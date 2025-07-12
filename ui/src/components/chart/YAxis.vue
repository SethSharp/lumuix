<script setup lang="ts">
import { VisAxis } from '@unovis/vue'
import type { YAxisProps } from '.'

const props = defineProps<YAxisProps>()
</script>

<template>
  <VisAxis type="y" v-bind="props" />
</template>