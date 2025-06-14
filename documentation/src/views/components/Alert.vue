<script setup lang="ts">
import sourceCode from '@/views/code/AlertCode.vue?raw'
import RenderPreviewCode from '@/components/RenderPreviewCode.vue'
import AlertCode from '@/views/code/AlertCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <AlertCode />
  </RenderPreviewCode>
</template>
