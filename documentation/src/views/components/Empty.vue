<script setup lang="ts">
import EmptyCode from '../code/EmptyCode.vue'
import sourceCode from '../code/EmptyCode.vue?raw'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <EmptyCode />
  </RenderPreviewCode>
</template>
