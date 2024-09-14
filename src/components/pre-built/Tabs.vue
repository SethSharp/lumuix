<script lang="ts" setup>
import { computed } from 'vue'
import Dropdown from './Dropdown.vue'
import { DropdownMenuLink } from '@/components/dropdown-menu'
import SecondaryButton from '../buttons/SecondaryButton.vue'
import { TabsRoot, TabBaseContent, TabsList, TabsItem } from '@/components/tabs'

const props = withDefaults(
  defineProps<{
    is?: any
    tabs: TabOption[]
  }>(),
  {
    is: 'a',
  },
)

const currentValue = computed(() =>
  props.tabs.find((tab) => {
    return tab.active
  }),
)
</script>

<template>
  <TabsRoot>
    <TabsList class="hidden gap-2 md:block">
      <TabsItem
        v-for="tab in tabs"
        :key="tab.name"
        :is="is"
        :tab="tab" />
    </TabsList>

    <TabsList class="flex md:hidden">
      <Dropdown trigger-class="size-full">
        <template #trigger>
          <SecondaryButton> {{ currentValue?.name ?? 'Select an option' }} </SecondaryButton>
        </template>

        <template #content>
          <DropdownMenuLink
            v-for="tab in tabs"
            :href="tab.href"
            :key="tab.name">
            {{ tab.name }}
          </DropdownMenuLink>
        </template>
      </Dropdown>
    </TabsList>

    <TabBaseContent>
      <slot />
    </TabBaseContent>
  </TabsRoot>
</template>
