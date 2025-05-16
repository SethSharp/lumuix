<script setup lang="ts"></script>

<template>
  <div class="text-text">
    <p>
      This package requires tailwind styles and variables to be configured at runtime, allowing
      components using these styles to be rendered at runtime.
    </p>

    <p>
      Below, we need to define the package preset. This will define those necessary tailwind
      variable s(such as primary and secondary):
    </p>

    <pre class="w-fit overflow-x-auto rounded-sm bg-slate-800 p-4 text-slate-50">
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

    <pre class="w-fit overflow-x-auto rounded-sm bg-slate-800 p-4 text-slate-50">
  @import '@sethsharp/lumuix/dist/types/presets/styles.css';

  :root {
      --primary: 173 80% 40%;;
      --primary-foreground: 210 40% 98%;
  }
    </pre>
    Note: You can overwrite styles for accent, destructive and secondary.
  </div>
</template>
