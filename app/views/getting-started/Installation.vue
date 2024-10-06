<script setup lang="ts">
import Code from '../../components/Code.vue'
import MainLayout from '../../layouts/MainLayout.vue'
</script>

<template>
  <MainLayout title="Installation">
    <p>
      Installation is fairly straight forward. First you must install the project from the npm
      registry:
    </p>

    <Code> npm i @sethsharp/lumuix </Code>

    <p>Next step is to include the package in the tailwind.config.js purge configuration:</p>

    <pre>
  content: [
    './node_modules/@sethsharp/lumuix/dist/*.js'
  ]
    </pre>
  </MainLayout>
</template>
