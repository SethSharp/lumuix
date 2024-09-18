<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/outline'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command'
import { Button } from '@/components/buttons'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(
  defineProps<{
    modelValue: [] | number | null
    placeholder?: string
    noResults?: string
    options: Option[]
    multiple?: boolean
    allowSearch?: boolean
    widthClass?: string
  }>(),
  {
    placeholder: 'Select option...',
    noResults: 'No option found.',
    multiple: false,
    allowSearch: false,
    widthClass: 'w-44',
  },
)

const open = ref(false)
const selectedOptions = ref<Option[] | Option | number | null>(props.modelValue ?? [])

const optionSelected = (option: Option) => {
  if (!props.multiple) {
    open.value = false
  }
}

const humanReadableOptions = computed(() => {
  if (props.multiple) {
    // @ts-ignore
    return selectedOptions.value.map((option) => option.name).join(', ')
  }

  if (typeof selectedOptions.value === 'object') {
    // @ts-ignore
    return selectedOptions.value.name
  }

  if (typeof selectedOptions.value === 'number') {
    return props.options.find((item) => item.id === selectedOptions.value).name
  }

  return props.placeholder
})

const search = (items: Option[], searchTerm: string) =>
  items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

const isSelected = (option: Option) => {
  if (props.multiple) {
    // @ts-ignore
    return selectedOptions.value.find((cur) => cur.id === option.id)
  }

  if (typeof selectedOptions.value === 'object') {
    // @ts-ignore
    return selectedOptions.value.id === option.id
  }

  if (typeof selectedOptions.value === 'number') {
    return selectedOptions.value === option.id
  }

  return false
}

watch(selectedOptions, () => {
  if (props.multiple) {
    emits('update:modelValue', selectedOptions.value)
  } else {
    // @ts-ignore
    emits('update:modelValue', selectedOptions.value.id)
  }
})
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="justify-between"
        :class="[widthClass]">
        <div class="overflow-hidden !font-normal dark:text-white">
          <template v-if="$slots.selectedOptions">
            <slot
              name="selectedOptions"
              :selectedOptions="selectedOptions" />
          </template>
          <template v-else>
            {{ humanReadableOptions }}
          </template>
        </div>
        <ChevronUpDownIcon class="ml-2 size-4 shrink-0 opacity-50 dark:text-white" />
      </Button>
    </PopoverTrigger>

    <PopoverContent
      class="!p-0"
      :class="[widthClass]">
      <Command
        :multiple="multiple"
        :filter-function="search"
        v-model="selectedOptions">
        <CommandInput
          v-if="allowSearch"
          class="h-9"
          :placeholder="placeholder" />

        <CommandEmpty>{{ noResults }}</CommandEmpty>

        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.id"
              :id="option.id"
              :value="option"
              @select="optionSelected(option)">
              <CheckIcon
                class="mr-2 size-4"
                :class="[isSelected(option) ? 'opacity-100' : 'opacity-0']" />
              <template v-if="$slots.item">
                <slot
                  name="item"
                  :option="option" />
              </template>
              <template v-else>
                {{ option.name }}
              </template>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
