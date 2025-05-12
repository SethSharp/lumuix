<script setup lang="ts">
import { ref, watch } from 'vue'
import { Check, Search, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { Combobox, ComboboxAnchor, ComboboxTrigger, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList } from '@/components/combobox'

const emits = defineEmits(['update:modelValue'])

type ModelValue = number | string | null

const props = defineProps<{
  modelValue: ModelValue
  placeholder?: string
  emptyMessage?: string
  options: Option[]
  multiple?: boolean
}>()

const selected = ref(props.modelValue ?? props.options[0])

watch(selected, () => {
  emits('update:modelValue', selected.value)
})
</script>

<template>
  <Combobox v-model="selected" by="label">
    <ComboboxAnchor as-child>
      <ComboboxTrigger as-child>
        <Button variant="outline" class="justify-between">
          {{ selected?.name ?? 'Select option' }}

          <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxList>
      <div class="relative w-full max-w-sm items-center">
        <ComboboxInput class="pl-9 focus-visible:ring-0 border-0 border-b rounded-none h-10" placeholder="Select option..." />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>

      <ComboboxEmpty>
        No option found.
      </ComboboxEmpty>

      <ComboboxGroup>
        <ComboboxItem
          v-for="option in options"
          :key="option.id"
          :value="option"
        >
          {{ option.name }}

          <ComboboxItemIndicator>
            <Check :class="cn('ml-auto size4')" />
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>