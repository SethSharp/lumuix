<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="leading-loose text-black dark:text-slate-400 dark:bg-black p-6 space-y-2">
    <h1 class="text-3xl dark:text-slate-300">{{ $route.name }}</h1>

    <slot />

    <div class="text-slate-600 dark:text-slate-500 space-y-4">
      <slot name="content" />
    </div>
  </div>
</template>
