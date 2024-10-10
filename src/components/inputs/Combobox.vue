<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command'

const props = withDefaults(
  defineProps<{
    modelValue?: Option[] | Option | number | null
    options: Option[]
    multiple?: boolean
    placeholder?: string
  }>(), {
    modelValue: null
  }
)

const computedPlaceholder = computed(() => props.placeholder ?? "Search framework...")

const selectedOptions = ref<Option[] | Option | number | null>(props.modelValue)

const isSelected = (option: Option) => {
  if (props.multiple) {
    return selectedOptions.value.find((cur) => cur.id === option.id)
  }

  if (typeof selectedOptions.value === 'object') {
    return selectedOptions.value.id === option.id
  }

  return selectedOptions.value === option.id
}

const humanReadableOptions = computed(() => {
  if (props.multiple) {
    // @ts-ignore
    return selectedOptions.value.map((option) => option.name).join(', ')
  }

  if (selectedOptions.value === null) {
    return computedPlaceholder.value
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
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        class="w-[200px] justify-between"
      >
        {{ humanReadableOptions }}
        <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command :multiple="multiple" v-model="selectedOptions">
        <CommandInput class="h-9" :placeholder="computedPlaceholder" />
        <CommandEmpty>Option not found</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.id"
              :value="option.id"
            >
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