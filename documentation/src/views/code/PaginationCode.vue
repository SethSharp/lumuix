<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  Button,
} from '@sethsharp/lumuix'
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2">
    <PaginationList
      v-slot="{ items }"
      class="flex items-center gap-1">
      <PaginationFirst
        href="#"
        :as="Link" />
      <PaginationPrev
        href="#"
        :as="Link" />

      <template v-for="(item, index) in items">
        <PaginationListItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child>
          <Button
            class="h-10 w-10 p-0"
            :variant="item.value === page ? 'default' : 'outline'">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="item.type"
          :index="index" />
      </template>

      <PaginationNext
        href="#"
        :as="Link" />
      <PaginationLast
        href="#"
        :as="Link" />
    </PaginationList>
  </Pagination>
</template>
