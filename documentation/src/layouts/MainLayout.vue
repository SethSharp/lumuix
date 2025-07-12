<script setup lang="ts">
import { Badge } from '@sethsharp/lumuix'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="bg-background mx-4 h-screen space-y-2 pt-6 leading-loose lg:mx-auto lg:w-3/4">
    <slot name="breadcrumbs" />

    <div class="flex items-center gap-2">
      <h1 class="text-heading text-3xl font-bold">{{ $route.name }}</h1>

      <Badge v-if="$route.meta.alpha" variant="destructive" type="outline" size="sm">
        Alpha
      </Badge>
    </div>

    <slot />

    <div class="space-y-4">
      <slot name="content" />
    </div>
  </div>
</template>
