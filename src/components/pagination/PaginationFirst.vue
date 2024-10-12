<script setup lang="ts">
import { ChevronsLeft } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationFirstProps & {
      class?: HTMLAttributes['class']
      href?: string
      is?: any
      as?: string
    }
  >(),
  {
    is: 'a',
    asChild: true,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <Button
      :href="href"
      :is="is"
      :as="as"
      class="size-10 p-0"
      variant="outline">
      <ChevronsLeft :size="16" />
    </Button>
  </PaginationFirst>
</template>
