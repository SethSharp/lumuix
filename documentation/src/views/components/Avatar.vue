<script setup lang="ts">
import AvatarCode from '../code/AvatarCode.vue'
import sourceCode from '../code/AvatarCode.vue?raw'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <AvatarCode />
  </RenderPreviewCode>
</template>
