<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { Button } from '@/components/button'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="leading-loose text-black dark:text-slate-300 space-y-4">
    <h1 class="text-3xl"> {{ title }} </h1>
    <Button v-if="$route.isExternal" variant="default" as-child>
      <a :href="`https://www.shadcn-vue.com/docs/components/${($route.name).toLowerCase()}.html`" target="_blank" class="flex gap-2">
        See Shadcn Docs
        <ArrowRightIcon class="text-white size-6" />
      </a>
    </Button>

    <div class="text-slate-400">
      <slot />
    </div>
  </div>
</template>