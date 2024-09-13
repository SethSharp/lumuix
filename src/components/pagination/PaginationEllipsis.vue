<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps } from 'radix-vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'
import { cn } from '@/lib/utils'

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)">
    <EllipsisHorizontalIcon class="size-4" />
  </PaginationEllipsis>
</template>
