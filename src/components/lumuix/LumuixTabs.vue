<script lang="ts" setup>
import { computed } from 'vue'
import { Button } from '@/components/button'
import { TabsRoot, TabBaseContent, TabsList, TabsItem } from '@/components/tabs'
import {
  DropdownMenu,
  DropdownMenuLink,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu'

const props = defineProps<{
  tabs: TabOption[]
}>()

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
        :tab="tab" />
    </TabsList>

    <TabsList class="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary"> {{ currentValue?.name ?? 'Select an option' }} </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-full">
          <DropdownMenuLink
            v-for="tab in tabs"
            :key="tab.name"
            v-bind="tab">
            {{ tab.name }}
          </DropdownMenuLink>
        </DropdownMenuContent>
      </DropdownMenu>
    </TabsList>

    <TabBaseContent>
      <slot />
    </TabBaseContent>
  </TabsRoot>
</template>
