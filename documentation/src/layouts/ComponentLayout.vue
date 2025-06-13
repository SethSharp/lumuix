<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
import MainLayout from './MainLayout.vue'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@sethsharp/lumuix/breadcrumb'
import { Button } from '@sethsharp/lumuix/button'

defineProps<{
  title: string
}>()
</script>

<template>
  <MainLayout :title="$route.name">
    <template #breadcrumbs>
      <BreadcrumbList>
        <BreadcrumbItem> Components </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink :href="`/components/${$route.name.toLowerCase()}`">
            {{ $route.name }}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </template>
    <Button
      v-if="$route.meta.shadcn"
      variant="default"
      as-child>
      <a
        :href="
          $route.meta.actualLink
            ? $route.meta.actualLink
            : `https://www.shadcn-vue.com/docs/components/${$route.name.toLowerCase()}.html`
        "
        target="_blank"
        class="flex gap-2">
        See Shadcn Docs
        <MoveRight class="text-muted size-5" />
      </a>
    </Button>

    <template #content>
      <div class="mt-10">
        <slot />
      </div>
    </template>
  </MainLayout>
</template>
