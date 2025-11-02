<script setup lang="ts">
import {
  SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator
} from '@sethsharp/lumuix'
</script>

<template>
  <SelectRoot :default-value="null">
    <SelectTrigger class="w-[180px]">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem :value="null"> Select a Item </SelectItem>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple"> Apple </SelectItem>
        <SelectItem value="banana"> Banana </SelectItem>
        <SelectItem value="blueberry"> Blueberry </SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="pumpkin"> Pumpkin </SelectItem>
        <SelectItem value="potato"> Potato </SelectItem>
        <SelectItem value="carrot"> Carrot </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
