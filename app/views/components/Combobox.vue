<script setup lang="ts">
import { ref, watch } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { Combobox } from '@/components/inputs'
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

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const options = [
  { id: 'next.js', name: 'Next.js' },
  { id: 'sveltekit', name: 'SvelteKit' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
]

const open = ref(false)
const value = ref('')

watch(value, () => {
  console.log(value.value)
})
</script>

<template>
  <Combobox :options="options" :multiple="true"/>

  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between"
      >
        data
        <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command :multiple="true">
        <CommandInput class="h-9" placeholder="Search framework..." />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }"
            >
              {{ framework.label }}
              <Check
                :class="cn(
                  'ml-auto size-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>