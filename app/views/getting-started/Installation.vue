<script setup lang="ts">
import Code from '../../components/Code.vue'
</script>

<template>
  <div>
    <p>
      Installation is fairly straight forward. First you must install the project from the npm
      registry:
    </p>

    <Code> npm i @sethsharp/lumuix </Code>

    <p>Next step is to include the package in the tailwind.config.js purge configuration:</p>

    <Code> content: [ './node_modules/@sethsharp/lumuix/dist/*.js' ] </Code>
  </div>
</template>
