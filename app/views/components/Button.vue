<script setup lang="ts">
import { Button } from '@/components/button'
</script>

<template>
  <div>The Button can take many forms using the variant prop</div>

  <div class="flex w-fit flex-col gap-y-2">
    <Button loading> Default </Button>
    <Button variant="primary"> Primary </Button>
    <Button
      variant="destructive"
      size="xs">
      Destructive
    </Button>
    <Button
      variant="secondary"
      size="sm">
      Secondary
    </Button>
    <Button
      variant="ghost"
      size="lg">
      Ghost
    </Button>
    <Button
      variant="outline"
      size="xl">
      Outline
    </Button>
    <Button
      variant="primary"
      size="xxl"
      loading>
      Register
    </Button>
  </div>
</template>
