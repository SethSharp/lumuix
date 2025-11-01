<script setup lang="ts">
import { LineChart } from '@sethsharp/lumuix'

const data = [
  { x: 1, a: 1, b: 2, c: 20 },
  { x: 5, a: 10, b: 15, c:18 },
  { x: 10, a: 40, b: 30, c: 30 },
]

const colours = {
  a: '#ff0000',
  b: '#00ff00',
  c: '#0032ff',
}

const items = [
  {
    key: 'a',
    name: 'A',
  },
  {
    key: 'b',
    name: 'B',
  },
  {
    key: 'c',
    name: 'C',
  }
]
</script>

<template>
  <LineChart
    :data
    index="x"
    :categories="['a', 'b', 'c']"
    :colours
    :items />
</template>
