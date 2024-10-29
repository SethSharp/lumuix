<script setup lang="ts">
import { ChevronsRight } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { PaginationLast, type PaginationLastProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationLastProps & {
      class?: HTMLAttributes['class']
      as?: any
    }
  >(),
  {
    asChild: true,
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
      :class="cn('size-10 p-0', props.class)"
      :as="as"
      variant="outline">
      <slot>
        <ChevronsRight class="size-4" />
      </slot>
    </Button>
  </PaginationLast>
</template>
