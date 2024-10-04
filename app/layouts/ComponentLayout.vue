<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { Button } from '@/components/button'
import MainLayout from './MainLayout.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <MainLayout :title="$route.name">
    <Button v-if="$route.meta.shadcn" variant="default" as-child>
      <a :href="`https://www.shadcn-vue.com/docs/components/${($route.name).toLowerCase()}.html`" target="_blank" class="flex gap-2">
        See Shadcn Docs
        <ArrowRightIcon class="text-white size-6" />
      </a>
    </Button>

    <template #content>
      <slot />
    </template>
  </MainLayout>
</template>