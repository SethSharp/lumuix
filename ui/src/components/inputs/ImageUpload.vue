<script lang="ts" setup>
import { provide, ref } from 'vue'
import { Label } from '@/components/form'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<{
    defaultImage?: string
    label?: string
    accept?: string
  }>(),
  {
    accept: 'image/gif, image/jpeg, image/png',
  },
)

const fileInput = ref<HTMLInputElement | null>(null)
const imageUrl = ref<string | null>(props.defaultImage ?? null)

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  imageUrl.value = URL.createObjectURL(file)

  console.log(file)
  model.value = file
}

const triggerFilePicker = () => {
  fileInput.value?.click()
}

const model = defineModel()

provide('container', 'md')
</script>

<template>
  <div class="space-y-2">
    <Label>{{ label }}</Label>

    <div class="flex items-center gap-2">
      <slot
        name="image"
        :curImage="imageUrl">
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded preview" class="size-32 rounded shadow" />
      </slot>

      <Button @click.prevent="triggerFilePicker" variant="outline">Upload</Button>

      <input ref="fileInput" type="file" :accept @change="onFileChange" class="hidden" />
    </div>
  </div>
</template>
