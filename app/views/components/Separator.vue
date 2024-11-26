<script setup lang="ts">
import { Separator } from '@/components/separator'
</script>

<template>
  <div>
    <Separator
      class="my-4"
      label="Or" />
    <div class="flex h-5 items-center space-x-4 text-sm text-text">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</template>
