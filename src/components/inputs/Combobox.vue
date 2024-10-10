<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command'
import { Button } from '@/components/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'

const emits = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: [] | number | null
  placeholder?: string
  emptyMessage?: string
  options: Option[]
  multiple?: boolean
}>()

const computedPlaceholder = computed(() => props.placeholder ?? "Select an option")
const computedEmpty = computed(() => props.emptyMessage ?? "Option not found")

const open = ref(false)
const selectedOptions = ref<Option[] | Option | number | null>(props.modelValue ?? [])

const search = (items: Option[], searchTerm: string) =>
  items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

const humanReadableOptions = computed(() => {
  if (props.multiple) {
    // @ts-ignore
    if (! selectedOptions.value.length) {
      return computedPlaceholder.value
    }

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

  return computedPlaceholder.value
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
        class="w-[200px] justify-between overflow-hidden !font-normal dark:text-white"
      >
          {{ humanReadableOptions }}
          <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50 dark:text-white" />
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-[200px] p-0">
      <Command :multiple="multiple" v-model="selectedOptions" :filter-function="search">
        <CommandInput
          class="h-9"
          :placeholder="computedPlaceholder" />

        <CommandEmpty>{{computedEmpty}}</CommandEmpty>

        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.id"
              :value="option">
                {{ option.name }}
                <Check
                  :class="cn(
                    'ml-auto size-4',
                    isSelected(option) ? 'opacity-100' : 'opacity-0',
                  )"
                />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>