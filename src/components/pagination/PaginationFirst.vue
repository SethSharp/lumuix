<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ChevronDoubleLeftIcon } from '@heroicons/vue/24/outline'
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
      <ChevronDoubleLeftIcon class="size-4" />
    </Button>
  </PaginationFirst>
</template>
