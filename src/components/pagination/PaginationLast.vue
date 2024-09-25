<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/outline'
import { PaginationLast, type PaginationLastProps } from 'radix-vue'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationLastProps & {
      class?: HTMLAttributes['class']
      href?: string
      is?: any
      as?: string
    }
  >(),
  {
    asChild: true,
    is: 'a',
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationLast v-bind="delegatedProps">
    <Button
      :href="href"
      :is="is"
      :as="as"
      class="size-10 p-0"
      variant="outline">
      <ChevronDoubleRightIcon class="size-4" />
    </Button>
  </PaginationLast>
</template>
