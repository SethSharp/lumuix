<script setup lang="ts">
import { computed, type HTMLAttributes, watch } from 'vue'
import { SwitchRoot, type SwitchRootProps, SwitchThumb, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Base } from '@/components/inputs'

const emits = defineEmits(['update:checked', 'update:modelValue'])
const props = defineProps<
  SwitchRootProps & {
    modelValue?: boolean | null
    class?: HTMLAttributes['class']
  }
>()

const toggle = defineModel()

watch(toggle, () => {
  emits('update:modelValue', toggle.value)
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Base v-bind="$props">
    <SwitchRoot
      v-model:checked="toggle"
      v-bind="forwarded"
      v-slot="{ checked }"
      :class="
        cn(
          'data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-primary',
          props.class,
        )
      ">
      <SwitchThumb
        class="pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50">
        <slot
          v-if="checked"
          name="checked" />

        <slot
          v-if="!checked"
          name="not-checked" />
      </SwitchThumb>
    </SwitchRoot>
  </Base>
</template>
