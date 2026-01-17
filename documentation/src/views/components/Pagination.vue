<script setup lang="ts">
import sourceCode from '../code/PaginationCode.vue?raw'
import PaginationCode from '../code/PaginationCode.vue'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <div>
    The latest shadcn pagination api accepts multiple parameters to easily any set of paginated data.
  </div>
  <RenderPreviewCode :source-code="sourceCode">
    <PaginationCode />
  </RenderPreviewCode>
</template>
