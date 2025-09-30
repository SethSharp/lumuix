<script setup lang="ts">
import sourceCode from '../code/DraggableCode.vue?raw'
import DraggableCode from '../code/DraggableCode.vue'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <DraggableCode />
  </RenderPreviewCode>
</template>
