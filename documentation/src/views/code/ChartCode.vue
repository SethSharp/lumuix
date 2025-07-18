<script setup lang="ts">
import { LineChart } from '@sethsharp/lumuix'

const sampleData = [
  { x: 1, a: 1, b: 2, c: 20 },
  { x: 5, a: 10, b: 15, c:18 },
  { x: 10, a: 40, b: 30, c: 30 },
]

const colours = [
  '#ff0000',
  '#00ff00',
  '#0032ff',
]

const items = [
  {
    name: 'A',
    color: colours[0]
  },
  {
    name: 'B',
    color: colours[1]
  },
  {
    name: 'B',
    color: colours[2]
  }
]
</script>

<template>
  <LineChart :data="sampleData" index="x" :categories="['a', 'b', 'c']" :colours :items />
</template>
