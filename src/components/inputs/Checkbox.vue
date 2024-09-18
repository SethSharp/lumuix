<script setup lang="ts">
import { watch, ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { CheckboxIndicator, CheckboxRoot, type CheckboxRootProps } from 'radix-vue'
import Label from './Label.vue'

const emits = defineEmits(['update:modelValue'])

const props = defineProps<
  CheckboxRootProps & {
    modelValue: boolean | null,
    label?: string
  }
>()

const checked = ref(props.modelValue)

watch(checked, (newChecked) => {
  emits('update:modelValue', newChecked)
})
</script>

<template>
  <div class="flex gap-2">
    <CheckboxRoot
      :id="id"
      v-model="checked"
      class="focus-visible:ring-primary-950 dark:ring-offset-primary-950 peer size-4 shrink-0 rounded-sm border border-primary-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=checked]:text-primary-50 dark:border-primary-50 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:text-primary-900">
      <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
        <CheckIcon class="size-4" />
      </CheckboxIndicator>
    </CheckboxRoot>

    <Label v-if="label" :id="id" class="my-auto">
      {{label}}
    </Label>
  </div>
</template>
