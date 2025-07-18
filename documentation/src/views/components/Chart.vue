<script setup lang="ts">
import ChartCode from '../code/ChartCode.vue'
import CustomChartCode from '../code/CustomChartCode.vue'
import sourceCode from '../code/ChartCode.vue?raw'
import customCode from '../code/CustomChartCode.vue?raw'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <div class="space-y-4">
    <div class="text-text">
      <p>
        This is a custom set of reusable components built from
        <a href="https://unovis.dev/" class="text-primary underline font-medium">
          unovis
        </a>.
        Right now it offers basic support for a line chart. Everything can be used more or less like
        unovis in its raw state, passing props and component structure.
      </p>

      <p>
        Original Documentation
        <a href="https://unovis.dev/contributing/intro" class="text-primary underline font-medium">
          here
        </a>
        .
      </p>
    </div>

    <div class="text-text space-y-2">
      <h2 class="text-xl text-heading">
        Custom Chart
      </h2>

      <p>
        Currently we support a all-in-one chart called LineChart. Unlike other aspects of the library,
        this is a pre-built component to show how you can use the libraries components - but also offers a easy chart
        to integrate.
      </p>

      <ul class="list-disc list-inside">
        <li>
          Chart Provider
        </li>
        <li>
          XAxis / YAxis
        </li>
      </ul>

      <p>
        The below example shows off how this can be achieved. Mentioning again this is a alpha build. The API
        is due to change to make this process a lot easier (composables etc).
      </p>

      <RenderPreviewCode :source-code="sourceCode">
        <ChartCode />
      </RenderPreviewCode>
    </div>

    <div class="text-text space-y-2">
      <h2 class="text-xl text-heading">
        Custom Chart
      </h2>

      <p>
        You can build out your custom charts using exported components
      </p>

      <ul class="list-disc list-inside">
        <li>
          Chart Provider
        </li>
        <li>
          XAxis / YAxis
        </li>
      </ul>

      <p>
        The below example shows off how this can be achieved. Mentioning again this is a alpha build. The API
        is due to change to make this process a lot easier (composables etc).
      </p>
    </div>

    <RenderPreviewCode :source-code="customCode">
      <CustomChartCode />
    </RenderPreviewCode>
  </div>
</template>
