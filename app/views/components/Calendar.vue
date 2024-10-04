<script setup lang="ts">
import { type Ref, ref, watch } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@/components/calendar'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>

watch(value, () => {
  console.log(value.value)
})
</script>

<template>
  <Calendar v-model="value" :weekday-format="'short'" class="rounded-md border w-fit" />
</template>
