<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '@sethsharp/lumuix/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrev,
  PaginationDetails,
} from '@sethsharp/lumuix/pagination'
import { Link } from '@inertiajs/vue3'

const paginatedData = {
  data: [],
  current_page: 4,
  first_page_url: '?page=1',
  from: 1,
  last_page: 6,
  last_page_url: '?page=7',
  links: [
    {
      active: false,
      label: '1',
      url: '?page=1',
    },
    {
      active: false,
      label: '2',
      url: '?page=2',
    },
    {
      active: false,
      label: '3',
      url: '?page=3',
    },
    {
      active: true,
      label: '4',
      url: '?page=4',
    },
    {
      active: false,
      label: '5',
      url: '?page=5',
    },
    {
      active: false,
      label: '6',
      url: '?page=6',
    },
    {
      active: false,
      label: '7',
      url: '?page=7',
    },
  ],
  next_page_url: '?page=6',
  path: '#',
  per_page: 2,
  prev_page_url: '?page=5',
  to: 2,
  total: 10,
}

const getStartingNumber = () => {
  if (paginatedData.current_page === 1) {
    if (paginatedData.data.length === 0) {
      return 0
    }

    return 1
  }

  if (paginatedData.current_page === paginatedData.last_page) {
    return paginatedData.total - paginatedData.data.length
  }

  return paginatedData.current_page * paginatedData.per_page - paginatedData.per_page
}

const getTotalNumber = () => {
  if (paginatedData.current_page === 1) {
    return paginatedData.data.length
  }

  if (paginatedData.current_page === paginatedData.last_page) {
    return paginatedData.total
  }

  return paginatedData.current_page * paginatedData.per_page
}

const currentActiveIndex = computed(() => paginatedData.links.findIndex((link) => link.active))
</script>

<template>
  <div class="justify-between sm:flex">
    <PaginationDetails
      :min="getStartingNumber()"
      :max="getTotalNumber()"
      :total="paginatedData.total" />

    <Pagination>
      <PaginationList class="flex items-center gap-1">
        <PaginationFirst v-slot="{ icon }">
          <Link :href="paginatedData.first_page_url">
            <component :is="icon"/>
          </Link>
        </PaginationFirst>

        <PaginationPrev
          v-slot="{ icon }"
          v-if="paginatedData.prev_page_url">
          <Link :href="paginatedData.prev_page_url">
            <component :is="icon" />
          </Link>
        </PaginationPrev>

        <template v-for="(item, index) in paginatedData.links">
          <Button
            v-if="index <= currentActiveIndex + 2 && index >= currentActiveIndex - 2"
            :key="index"
            as-child
            class="size-10 p-0"
            :variant="item.active ? 'primary' : 'outline'">
            <Link :href="item.url">
              {{ item.label }}
            </Link>
          </Button>
        </template>

        <PaginationEllipsis v-if="currentActiveIndex < paginatedData.links.length - 2" />

        <PaginationNext
          v-if="paginatedData.next_page_url"
          v-slot="{ icon }">
          <Link :href="paginatedData.next_page_url">
            <component :is="icon" />
          </Link>
        </PaginationNext>

        <PaginationLast v-slot="{ icon }">
          <Link :href="paginatedData.last_page_url">
            <component
              :is="icon"
              class="size-4" />
          </Link>
        </PaginationLast>
      </PaginationList>
    </Pagination>
  </div>
</template>
