<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@/components/calendar'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <Calendar
    v-model="value"
    weekday-format="narrow"
    class="w-fit rounded-md border" />

  <Calendar
    v-model="value"
    weekday-format="short"
    class="w-fit rounded-md border" />

  <Calendar
    v-model="value"
    weekday-format="long"
    class=" rounded-md border" />
</template>
