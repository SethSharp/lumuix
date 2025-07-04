<script setup lang="ts">
import sourceCode from '../code/NavigationMenuCode.vue?raw'
import NavigationMenuCode from '../code/NavigationMenuCode.vue'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <RenderPreviewCode :source-code="sourceCode">
    <NavigationMenuCode />
  </RenderPreviewCode>
</template>
