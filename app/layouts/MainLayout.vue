<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="space-y-4 leading-loose text-black dark:text-slate-300 dark:bg-black p-6">
    <h1 class="text-3xl">{{ $route.name }}</h1>

    <slot />

    <div class="text-slate-600 dark:text-slate-500">
      <slot name="content" />
    </div>
  </div>
</template>
