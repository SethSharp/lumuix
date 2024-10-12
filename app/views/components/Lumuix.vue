<script setup lang="ts">
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import { House, Users, Banknote } from 'lucide-vue-next'
import { Button } from '@/components/button'
import {
  LumuixModeToggle,
  LumuixDatatable,
  LumuixModal,
  LumuixTabs,
  LumuixPagination,
} from '@/components/lumuix'

const dataTableConfig = computed(() => ({
  headers: [
    {
      value: 'market',
      name: 'Market',
    },
    {
      value: 'sports_bet',
      name: 'Sports Bet',
    },
    {
      value: 'lad_brokes',
      name: 'Lad Brokes',
    },
    {
      value: 'top_sport',
      name: 'Top Sport',
    },
  ],
  rows: [
    {
      market: 'Head to Head',
      sports_bet: 1.23,
      lad_brokes: 1.25,
      top_sport: 1.32,
    },
    {
      market: 'To Win',
      sports_bet: 2.3,
      lad_brokes: 2.5,
      top_sport: 2.43,
    },
    {
      market: '+13 Margin',
      sports_bet: 3.5,
      lad_brokes: 5.01,
      top_sport: 4.71,
    },
  ],
}))

const tabs = [
  {
    name: 'Dashboard',
    href: '#',
    active: true,
    icon: House,
  },
  {
    name: 'Users',
    href: 'https://google.com',
    is: 'a',
    active: false,
    icon: Users,
  },
  {
    name: 'Payroll',
    href: '#',
    active: false,
    is: Link,
    icon: Banknote,
  },
]

const paginatedData = {
  data: [],
  current_page: 2,
  first_page_url: 'https://portfolio.test/dashboard/blogs?page=1',
  from: 1,
  last_page: 5,
  last_page_url: 'https://portfolio.test/dashboard/blogs?page=5',
  links: [
    {
      active: false,
      label: '1',
      url: 'https://portfolio.test/dashboard/blogs?page=1',
    },
    {
      active: true,
      label: '2',
      url: 'https://portfolio.test/dashboard/blogs?page=2',
    },
    {
      active: false,
      label: '3',
      url: 'https://portfolio.test/dashboard/blogs?page=3',
    },
    {
      active: false,
      label: '4',
      url: 'https://portfolio.test/dashboard/blogs?page=4',
    },
    {
      active: false,
      label: '5',
      url: 'https://portfolio.test/dashboard/blogs?page=5',
    },
  ],
  next_page_url: 'https://portfolio.test/dashboard/blogs?page=3',
  path: 'https://portfolio.test/dashboard/blogs',
  per_page: 2,
  prev_page_url: 'https://portfolio.test/dashboard/blogs?page=1',
  to: 2,
  total: 10,
}
</script>

<template>
  <div>
    <p>Lumuix opinionated components. Built using internal components.</p>

    <div class="mt-5 space-y-4">
      <div>
        <LumuixDatatable
          caption="Data on sports betting"
          v-bind="dataTableConfig" />
      </div>

      <div>
        <LumuixModal>
          <template #trigger>
            <Button variant="default"> Modal </Button>
          </template>

          <template #title> This is the title </template>
          <template #description>
            This is the modal description. You can also pass the title and description as part of
            the headerData object</template
          >
          <template #footer>Oh hello, I am down here - the footer...</template>
        </LumuixModal>
      </div>

      <div>
        <p>Toggle dark mode from anywhere in your site</p>
        <LumuixModeToggle />
      </div>

      <div>
        <LumuixTabs :tabs="tabs">
          <p>
            Shadcn tabs work differently to how I typically use them. This component will allow you
            to have a page per tab. This requires a layout to implement the same tab and logic to
            identify which one is active. To make things easy, we bind any attributes you give each
            TabOption.
          </p>

          <br />

          <p>
            You will notice the Users and Payroll tab work differently. This is an example of the
            tab.is attribute working its magic. If you needed to navigate externally or are using a
            custom Link component then that is how you would do it. Each tab default to the anchor
            tag
          </p>
        </LumuixTabs>
      </div>

      <div>
        <LumuixPagination :data="paginatedData" />
      </div>
    </div>
  </div>
</template>
