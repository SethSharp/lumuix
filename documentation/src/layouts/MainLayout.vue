<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="bg-background mx-4 h-screen space-y-2 pt-6 leading-loose lg:mx-auto lg:w-3/4">
    <slot name="breadcrumbs" />

    <h1 class="text-heading text-3xl font-bold">{{ $route.name }}</h1>

    <slot />

    <div class="space-y-4">
      <slot name="content" />
    </div>
  </div>
</template>
