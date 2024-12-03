<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
import MainLayout from './MainLayout.vue'
import { Button } from '@/components/button'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@'

defineProps<{
  title: string
}>()
</script>

<template>
  <MainLayout :title="$route.name">
    <template #breadcrumbs>
      <BreadcrumbList>
        <BreadcrumbItem>
          Components
        </BreadcrumbItem>
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
        :href="`https://www.shadcn-vue.com/docs/components/${$route.name.toLowerCase()}.html`"
        target="_blank"
        class="flex gap-2">
        See Shadcn Docs
        <MoveRight class="size-5 text-muted" />
      </a>
    </Button>

    <template #content>
      <slot />
    </template>
  </MainLayout>
</template>
