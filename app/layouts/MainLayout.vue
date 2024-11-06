<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="space-y-2 p-6 leading-loose dark:bg-black">
    <h1 class="text-3xl font-bold dark:text-white">{{ $route.name }}</h1>

    <slot />

    <div class="space-y-4">
      <slot name="content" />
    </div>
  </div>
</template>
