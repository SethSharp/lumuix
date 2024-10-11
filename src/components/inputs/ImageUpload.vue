<script lang="ts" setup>
import { computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { Base } from '@/components/inputs'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<{
    modelValue?: any
    currentImage?: string
    defaultImage?: string
    accept?: string
  }>(),
  {
    accept: 'image/gif, image/jpeg, image/png',
  },
)

const emits = defineEmits(['update:modelValue'])

const uniqueId = 'file-upload-' + uuidv4()
const newImage = computed(() => (inputVal.value ? URL.createObjectURL(inputVal.value) : null))
const curImg = props.currentImage ? props.currentImage : props.defaultImage

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
})

const handleFileChange = (event: any) => {
  inputVal.value = event.target.files[0]
}

const fileUpload = () => document.getElementById(uniqueId).click()
</script>

<template>
  <Base v-bind="$props">
    <div class="flex items-center space-x-2">
      <slot
        name="image"
        :newImage="newImage"
        :curImage="curImg">
        <img
          :src="newImage ?? curImg"
          alt="Image cannot be shown right now"
          class="size-24 rounded-full dark:bg-slate-700" />
      </slot>

      <input
        :id="uniqueId"
        :accept="accept"
        hidden
        type="file"
        @input="handleFileChange" />

      <Button
        variant="secondary"
        @click="fileUpload">
        Upload
      </Button>
    </div>
  </Base>
</template>
