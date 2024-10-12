<script setup lang="ts">
import { watch, ref } from 'vue'
import { Check } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot, type CheckboxRootProps } from 'radix-vue'
import { Label } from '@/components/form'
import { Base } from '@/components/inputs'

const emits = defineEmits(['update:modelValue'])

const props = defineProps<
  CheckboxRootProps & {
    modelValue: boolean | null
    text?: string
  }
>()

const checked = ref(props.modelValue)

watch(checked, (newChecked) => {
  emits('update:modelValue', newChecked)
})
</script>

<template>
  <Base v-bind="$props">
    <div class="flex gap-2">
      <CheckboxRoot
        :id="id"
        v-model:checked="checked"
        class="peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:text-primary-50 dark:border-primary-900 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-400 dark:data-[state=checked]:text-primary-800">
        <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
          <Check :size="16" />
        </CheckboxIndicator>
      </CheckboxRoot>

      <Label
        v-if="text"
        :id="id"
        class="my-auto">
        {{ text }}
      </Label>
    </div>
  </Base>
</template>
