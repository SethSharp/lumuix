<script setup lang="ts">
import { ChevronsLeft } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(),
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
  <PaginationFirst v-bind="delegatedProps">
    <Button
      :class="cn('size-10 p-0', props.class)"
      variant="outline">
      <slot>
        <ChevronsLeft class="size-4" />
      </slot>
    </Button>
  </PaginationFirst>
</template>
