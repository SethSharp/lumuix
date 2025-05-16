<script lang="ts" setup>
defineProps<{
  error?: string
}>()
</script>

<template>
  <div v-show="error">
    <p class="text-sm text-red-600 dark:text-red-400">
      {{ error }}
    </p>
  </div>
</template>
