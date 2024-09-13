<script setup lang="ts">
import { Button } from '@/ui/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrev,
  PaginationDetails
} from '@/components/pagination'

const props = withDefaults(
  defineProps<{
    data: Paginator<any>
    is?: any
    as?: any
  }>(),
  {
    is: 'a',
  },
)

const getStartingNumber = () => {
  if (props.data.current_page === 1) {
    if (props.data.data.length === 0) {
      return 0
    }

    return 1
  }

  if (props.data.current_page === props.data.last_page) {
    return props.data.total - props.data.data.length
  }

  return props.data.current_page * props.data.per_page - props.data.per_page
}

const getTotalNumber = () => {
  if (props.data.current_page === 1) {
    return props.data.data.length
  }

  if (props.data.current_page === props.data.last_page) {
    return props.data.total
  }

  return props.data.current_page * props.data.per_page
}
</script>

<template>
  <div class="justify-between sm:flex">
    <PaginationDetails :min="getStartingNumber()" :max="getTotalNumber" :total="data.total" />

    <Pagination>
      <PaginationList class="flex items-center gap-1">
        <PaginationFirst
          :is="is"
          :as="as"
          :href="data.first_page_url" />

        <PaginationPrev
          v-if="data.prev_page_url"
          :is="is"
          :as="as"
          :href="data.prev_page_url" />

        <template v-for="(item, index) in data.links">
          <div
            v-if="index < 5"
            :key="index">
            <Button
              :href="item.url"
              :is="is"
              :as="as"
              class="size-10 p-0"
              :variant="item.active ? 'primary' : 'outline'">
              {{ item.label }}
            </Button>
          </div>
        </template>

        <PaginationEllipsis v-if="data.links.length > 5" />

        <PaginationNext
          v-if="data.next_page_url"
          :is="is"
          :as="as"
          :href="data.next_page_url" />

        <PaginationLast
          :is="is"
          :as="as"
          :href="data.last_page_url" />
      </PaginationList>
    </Pagination>
  </div>
</template>
