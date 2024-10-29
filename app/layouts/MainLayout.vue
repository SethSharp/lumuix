<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="space-y-2 p-6 leading-loose text-black dark:bg-black dark:text-slate-400">
    <h1 class="text-3xl font-bold dark:text-white">{{ $route.name }}</h1>

    <slot />

    <div class="space-y-4 text-slate-600 dark:text-slate-500">
      <slot name="content" />
    </div>
  </div>
</template>
