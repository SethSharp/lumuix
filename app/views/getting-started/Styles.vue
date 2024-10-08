<script setup lang="ts"></script>

<template>
  <div>
    <p>
      This package requires tailwind styles and variables to be configured at runtime, allowing
      components using these styles to be rendered at runtime.
    </p>

    <p>
      Below, we need to define the package preset. This will define those necessary tailwind
      variable s(such as primary and secondary):
    </p>

    <pre>
  import { preset } from '@sethsharp/lumuix';

  module.exports = {
    presets: [preset],
    // the rest of your tailwind.config.js
  }
    </pre>

    <p>
      Now we must import the default styles this package comes with. You can import this file in
      your main CSS file. Below is also an example of how you might want to edit the styles for the
      main primary colour.
    </p>

    <pre>
  @import '@sethsharp/lumuix/dist/types/presets/styles.css';

  :root {
      --primary-500: 174 90% 31%;
      // rest of HSL codes (primary-{50-950})
  }
    </pre>
  </div>
</template>
