<script setup lang="ts">
import sourceCode from '../code/ComboboxCode.vue?raw'
import ComboboxCode from '../code/ComboboxCode.vue'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <ComboboxCode />
  </RenderPreviewCode>
</template>
