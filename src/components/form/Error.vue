<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps<{
  message?: string | null
}>()

onMounted(() => {
  if (props.message) {
    console.warn('WARNING: The :message prop will not be supported in the next major version.')
  }
})
</script>

<template>
  <div v-show="message">
    <p class="text-sm text-red-600 dark:text-red-400">
      {{ message }}
    </p>
  </div>
</template>
