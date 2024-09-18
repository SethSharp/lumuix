<script lang="ts" setup>
import { Link } from '@inertiajs/vue3'
import { computed, ref, watch } from 'vue'
import { CalendarDate } from '@internationalized/date'
import {
  ChartBarSquareIcon,
  ChevronDownIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/vue/16/solid'
import Tabs from './components/pre-built/Tabs.vue'
import Text from './components/inputs/Text.vue'
import Heading from './components/page/Heading.vue'
import Toggle from './components/inputs/Toggle.vue'
import Modal from './components/pre-built/Modal.vue'
import Select from './components/inputs/Select.vue'
import Datatable from './components/pre-built/Datatable.vue'
import Container from './components/page/Container.vue'
import Checkbox from './components/inputs/Checkbox.vue'
import TextArea from './components/inputs/TextArea.vue'
import Combobox from './components/inputs/Combobox.vue'
import Dropdown from './components/pre-built/Dropdown.vue'
import Pagination from './components/pre-built/Pagination.vue'
import DatePicker from './components/inputs/DatePicker.vue'
import DarkModeToggle from './components/pre-built/DarkModeToggle.vue'
import ImageUpload from './components/inputs/ImageUpload.vue'
import Notifications from './components/page/Notifications.vue'
import DangerButton from './components/buttons/DangerButton.vue'
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import SecondaryButton from './components/buttons/SecondaryButton.vue'
import { DropdownMenuItem, DropdownMenuLink } from '@/components/dropdown-menu'

const sendAlert = (msg: string) => alert(msg)

const baseDataTableConfig = computed(() => ({
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
  ],
  rows: [
    {
      // shows the DT ability to map the row data to the correct header
      market: 'Head to Head',
      sports_bet: 2.3,
      lad_brokes: 2.3,
    },
  ],
}))

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
  ],
  rows: [
    {
      // shows the DT ability to map the row data to the correct header
      market: 'Head to Head',
      sports_bet: null,
      value: null,
      subRows: [
        {
          sports_bet: 1.23,
          lad_brokes: 3.43,
          market: 'Cowboys',
        },
        {
          sports_bet: 1.23,
          lad_brokes: 3.43,
          market: 'Storm',
        },
      ],
    },
  ],
}))

const tabs = [
  {
    name: 'Dashboard',
    href: '?',
    active: window.location.search === '',
    icon: HomeIcon,
  },
  {
    name: 'Live Stats',
    href: '?page=2',
    active: window.location.search === '?page=2',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Profile',
    href: '?page=3',
    active: window.location.search === '?page=3',
    icon: UserCircleIcon,
  },
]

// checkbox
const tickedValue = ref(false)

// pagination
const paginatedData: Paginator<any> = {
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

// text input
const textInput = ref('')

// text area
const textArea = ref('')

// toggle
const toggle = ref(false)

// selects
const frameworks = [
  { id: 1, name: 'Next.js' },
  { id: 2, name: 'SvelteKit' },
  { id: 3, name: 'Nuxt' },
  { id: 4, name: 'Remix' },
  { id: 5, name: 'Astro' },
]

const multiSelect = ref(null)
const comboSingleSelect = ref(null)

const singleSelect = ref('Banana')
const singleSelectOptions = ['Banana', 'Apples', 'Grapes', 'Watermelon']

const newDateValue = new CalendarDate(2024, 12, 20)
const calendar = ref(null)

// popovers
const open = ref(false)

// notifications
const successMsg = ref(null)
const errorMsg = ref(null)

const addSuccess = (msg: string) => {
  successMsg.value = msg

  setTimeout(() => {
    successMsg.value = null
  }, 5000)
}

const addError = (msg: string) => {
  errorMsg.value = msg

  setTimeout(() => {
    errorMsg.value = null
  }, 5000)
}

watch(multiSelect, () => {
  console.log(multiSelect.value)
})
</script>

<template>
  <div
    id="nav-bar"
    class="sticky top-0 z-10 flex h-fit w-full justify-between bg-gradient-to-r from-green-400 to-green-500 dark:from-gray-800 dark:to-gray-950">
    <a
      href="https://github.com/SethSharp/ui"
      class="p-4 text-xl text-gray-100 transition hover:text-white dark:text-primary-200 sm:text-3xl">
      <b> Lumuix </b>- Generic Vue Component Library
    </a>
    <div class="my-auto mr-6 flex gap-2 font-bold text-white dark:text-primary-200">
      1.0.0-alpha.1.0
      <DarkModeToggle />
    </div>
  </div>

  <div class="mx-4 mt-4 space-y-6 sm:mx-8">
    <Container>
      <Heading shadow> Overview </Heading>

      <Container>
        This component library adds multiple benefits, including but not limited to the following:
        <ol class="list-inside list-decimal">
          <li>Reduced Duplication</li>
          <li>Offers downstream effects across all products</li>
          <li>Single source of all components for new projects</li>
          <li>Implements preferred usage of shadcn vue components</li>
        </ol>
      </Container>
    </Container>

    <Container>
      <Heading shadow> Page </Heading>

      <div class="space-y-4">
        <Datatable v-bind="baseDataTableConfig">
          <template #header_market="{ item }">
            <div class="text-xs">
              {{ item.name }}
            </div>
          </template>
          <template #row_actions> Some action </template>
        </Datatable>

        <Tabs
          :tabs="tabs"
          :is="Link">
          Pagination accepts a data structure to that of what Spatie's QueryBuilder returns when you
          paginate it. I think it would be similar to a standard Laravel paginated as well.

          <Pagination :data="paginatedData" />
        </Tabs>
      </div>
    </Container>

    <Container>
      <Heading shadow> Inputs </Heading>

      <div class="space-y-4 my-4">
        <Text
          v-model="textInput"
          label="Firstname"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          show-character-count
          error="Some error has occurred here!"
          placeholder="Enter your name" />

        <TextArea
          v-model="textArea"
          label="Description of yourself"
          placeholder="A little but about yourself"
          show-character-count />

        <Checkbox
          v-model="tickedValue"
          :show-label="false"
          label="Is Australia the best country?"
          description="some description" />

        <ImageUpload label="Upload a Personal Picture" />

        <Combobox
          v-model="multiSelect"
          :options="frameworks"
          allow-search
          multiple
          width-class="w-96" />

        <Combobox
          v-model="comboSingleSelect"
          :options="frameworks"
          allow-search
          width-class="w-72" />

        <Select
          v-model="singleSelect"
          :options="singleSelectOptions"
          label="Select a single option" />

        <Toggle
          v-model="toggle"
          label="Receive Notifications?" />

        <DatePicker
          v-model="calendar"
          :default-value="newDateValue" />
      </div>
    </Container>

    <Container>
      <Heading shadow> Dropdown </Heading>

      <Dropdown width-class="w-72">
        <template #trigger="{ open }">
          <SecondaryButton>
            Click me!
            <ChevronDownIcon
              class="size-5 transition"
              :class="[open ? 'rotate-180' : '']" />
          </SecondaryButton>
        </template>

        <template #content>
          <DropdownMenuItem @click="sendAlert('You clicked a dropdown menu item')">
            Some item to click
          </DropdownMenuItem>
          <DropdownMenuLink href="https://google.com"> Some link item </DropdownMenuLink>
        </template>
      </Dropdown>
    </Container>

    <Container>
      <Heading shadow> Links & Buttons </Heading>

      Both Buttons & Links extend the base shadcn Button component however, there are different
      required props for each component ie; Links will require a href and buttons can be provided a
      type or disabled. Buttons will default to is: 'button' and Links will default to is: 'a'. All
      attributes attached will be bind so you can create anything you need - a button & link
      component is purely for DX, here are some examples.

      <div class="mt-4 space-y-3">
        <div class="flex gap-2">
          <PrimaryButton @click.prevent="sendAlert('You clicked me!')">
            Primary {button}
          </PrimaryButton>
          <PrimaryButton
            is="a"
            href="https://laravel.com/docs/11.x">
            Primary {a}
          </PrimaryButton>
          <PrimaryButton
            :is="Link"
            href="http://localhost:5173#2">
            Primary {Link}
          </PrimaryButton>
          <PrimaryButton
            :is="Link"
            as="a"
            href="http://localhost:5173#2">
            Primary {Link} as {a}
          </PrimaryButton>
          <PrimaryButton
            :is="Link"
            as="button">
            Primary Button is {Link} as {button}
          </PrimaryButton>
        </div>

        <div class="flex gap-2">
          <SecondaryButton @click.prevent="sendAlert('You clicked me!')">
            A secondary button
          </SecondaryButton>
          <SecondaryButton
            is="a"
            href="https://vuejs.org">
            A secondary link
          </SecondaryButton>
        </div>

        <div class="flex gap-2">
          <DangerButton @click.prevent="sendAlert('You clicked me!')">
            A danger button
          </DangerButton>
          <DangerButton
            is="a"
            href="https://google.com">
            A danger link
          </DangerButton>
        </div>
      </div>
    </Container>

    <Container>
      <Heading shadow> Popovers </Heading>

      <PrimaryButton @click="open = true"> Open Modal </PrimaryButton>

      <Modal
        :open="open"
        @close="open = false"
        size="xl"
        :header-data="{
          title: 'This is my modal',
          description:
            'This is a small description about this modal. You can provide a footer & trigger slot and the default slot will become the content.',
        }">
        Some content in here
      </Modal>
    </Container>

    <Container>
      <Heading> Notifications </Heading>

      <SecondaryButton @click="addSuccess('This is a successful message!')">
        Add Success Message
      </SecondaryButton>

      <DangerButton @click="addError('This is a error message!')"> Add Error Message </DangerButton>
    </Container>

    <Notifications
      :success="successMsg"
      :errors="errorMsg" />
  </div>
</template>
