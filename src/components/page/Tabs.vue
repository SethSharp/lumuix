<script lang="ts" setup>
import { computed } from 'vue'
import TabRoot from '@/ui/tabs/TabRoot.vue'
import Dropdown from '../dropdown/Dropdown.vue'
import { DropdownMenuLink } from '@/ui/dropdown-menu'
import { TabsList, TabsItem } from '@/ui/tabs'
import SecondaryButton from '../buttons/SecondaryButton.vue'
import BaseContent from '@/ui/tabs/BaseContent.vue'

const props = withDefaults(
  defineProps<{
    is?: any
    tabs: TabOption[]
  }>(),
  {
    is: 'a',
  },
)

const currentValue = computed(() => {
  return props.tabs.find((tab) => {
    return tab.active
  })
})
</script>

<template>
  <TabRoot>
    <TabsList class="hidden gap-2 md:block">
      <slot name="tab-list">
        <TabsItem
          v-for="tab in tabs"
          :key="tab.name"
          :is="is"
          :tab="tab" />
      </slot>
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

    <BaseContent>
      <slot />
    </BaseContent>
  </TabRoot>
</template>
