<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="space-y-2 leading-loose bg-background pt-6 pr-12 h-screen w-full">
    <slot name="breadcrumbs" />

    <h1 class="text-3xl font-bold text-heading">{{ $route.name }}</h1>

    <slot />

    <div class="space-y-4">
      <slot name="content" />
    </div>
  </div>
</template>
