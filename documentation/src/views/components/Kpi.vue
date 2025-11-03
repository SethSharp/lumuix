<script setup lang="ts">
import sourceCode from '../code/KpiCode.vue?raw'
import KpiCode from '../code/KpiCode.vue'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <KpiCode />
  </RenderPreviewCode>
</template>
