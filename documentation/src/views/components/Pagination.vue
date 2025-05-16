<script setup lang="ts">
import sourceCode from '../code/PaginationCode.vue?raw'
import PaginationCode from '../code/PaginationCode.vue'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <PaginationCode />
  </RenderPreviewCode>
</template>
