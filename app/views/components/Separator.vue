<script setup lang="ts">
import { Separator } from '@/components/separator'
</script>

<template>
  <div>
    <Separator
      class="my-4"
      label="Or" />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <p class="text-muted-foreground">Blog</p>
      <Separator orientation="vertical" />
      <div class="text-muted-foreground">Docs</div>
      <Separator orientation="vertical" />
      <div class="text-muted-foreground">Source</div>
    </div>
  </div>
</template>
