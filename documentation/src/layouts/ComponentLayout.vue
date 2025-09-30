<script setup lang="ts">
import { MoveRight, TriangleAlert } from 'lucide-vue-next'
import MainLayout from './MainLayout.vue'
import {
  Button,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Badge,
  Alert,
  AlertDescription,
} from '@sethsharp/lumuix'

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
      v-if="$route.meta.contributor === 'shadcn'"
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
    <div v-else-if="$route.meta.contributor === 'lumuix'">
      <Badge size="sm" type="outline">
        {{ $route.meta.label ?? 'Lumuix Component' }}
      </Badge>
    </div>

    <Alert v-if="$route.meta.alertMessage" variant="warning">
      <AlertDescription class="flex items-center">
        <TriangleAlert />
        {{ $route.meta.alertMessageContent }}
      </AlertDescription>
    </Alert>

    <template #content>
      <div class="mt-10">
        <slot />
      </div>
    </template>
  </MainLayout>
</template>
