<script setup lang="ts">
import { VisXYContainer } from '@unovis/vue'

type GenericDataRecord = Record<string, any>


defineProps< {
  data: GenericDataRecord[]
}>()
</script>

<template>
  <VisXYContainer :data="data">
    <slot />
  </VisXYContainer>
</template>
