<script setup lang="ts">
import { VisAxis } from '@unovis/vue'
import type { XAxisProps } from '.'

const props = defineProps<XAxisProps>()
</script>

<template>
  <VisAxis type="x" v-bind="props" />
</template>