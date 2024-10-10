<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command'

const emits = defineEmits(['update:modelValue'])

type ModelValue = Option[] | Option | number | null | string

const props = defineProps<{
  modelValue: ModelValue
  placeholder?: string
  emptyMessage?: string
  options: Option[]
  multiple?: boolean
}>()

const computedEmpty = computed(() => props.emptyMessage ?? 'Option not found')
const computedPlaceholder = computed(() => props.placeholder ?? 'Select an option')

const open = ref(false)
const selectedOptions = ref<ModelValue>(props.modelValue ?? [])

const search = (items: Option[], searchTerm: string) =>
  items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

const humanReadableOptions = computed(() => {
  if (Array.isArray(selectedOptions.value)) {
    if (!selectedOptions.value.length) {
      return computedPlaceholder.value
    }

    return selectedOptions.value.map((option) => option.name).join(', ')
  }

  if (typeof selectedOptions.value === 'object') {
    return selectedOptions.value.name
  }

  return props.options.find((item) => item.id === selectedOptions.value)?.name
})

const isSelected = (option: Option) => {
  if (Array.isArray(selectedOptions.value)) {
    return selectedOptions.value.find((cur) => cur.id === option.id)
  }

  if (typeof selectedOptions.value === 'object') {
    return selectedOptions.value.id === option.id
  }

  return selectedOptions.value === option.id
}

watch(selectedOptions, () => {
  if (Array.isArray(selectedOptions.value)) {
    emits('update:modelValue', selectedOptions.value)
  } else {
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
        class="w-[200px] justify-between overflow-hidden !font-normal dark:text-white">
        {{ humanReadableOptions }}
        <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50 dark:text-white" />
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-[200px] p-0">
      <Command
        :multiple="multiple"
        v-model="selectedOptions"
        :filter-function="search">
        <CommandInput
          class="h-9"
          :placeholder="computedPlaceholder" />

        <CommandEmpty>{{ computedEmpty }}</CommandEmpty>

        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.id"
              :value="option"
              @select="
                () => {
                  if (!multiple) {
                    open = false
                  }
                }
              ">
              {{ option.name }}
              <Check
                :class="cn('ml-auto size-4', isSelected(option) ? 'opacity-100' : 'opacity-0')" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
