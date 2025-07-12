<script setup lang="ts">
import ChartCode from '../code/ChartCode.vue'
import sourceCode from '../code/ChartCode.vue?raw'
import RenderPreviewCode from '../../components/RenderPreviewCode.vue'
</script>

<template>
  <div>
    <div>
      <p>
        This is a custom set of reusable components built from
        <a href="https://unovis.dev/" class="text-primary underline font-medium">
          unovis
        </a>.
        Right now it offers basic support for a line chart. Everything can be used more or less like
        unovis in its raw state, passing props and component structure.
      </p>

      <h3>Points</h3>
      <ul class="list-disc list-inside">
        <li>
          All charts must be wrapped in `ChartProvider`
        </li>
        <li>
          Expansion of support is planned, but feel free to make those contributions yourself
        </li>
        <li>
          Checkout the documentation
          <a href="https://unovis.dev/contributing/intro" class="text-primary underline font-medium">
            here
          </a>
        </li>
      </ul>
    </div>
    <RenderPreviewCode :source-code="sourceCode">
      <ChartCode />
    </RenderPreviewCode>
  </div>
</template>
