<script setup lang="ts">
import Code from '@/components/Code.vue'
import cssCode from '../code/cssConfig.txt?raw'
import sourceCode from '../code/tailwindConfig.txt?raw'
import updatePreset from '../code/updatePreset.txt?raw'
</script>

<template>
  <div class="text-text space-y-2">
    <p>
      Installation is fairly straight forward. First you must install the project from the npm
      registry:
    </p>

    <Code lang="bash" source-code="npm i @sethsharp/lumuix" />

    <p>
      Lumuix uses Tailwind CSS v4 and provides a full preset via a single <code>slate.css</code> file.
      This file already includes Tailwind's layers and utility setup.
    </p>

    <p>
      To apply the preset, import it in your main CSS file:
    </p>

    <Code lang="css" :source-code="cssCode" />

    <p>
      If needed, you can overwrite variables in <code> slate.css </code> like so, ensuring to use <code>hsl</code>:
    </p>

    <Code lang="css" :source-code="updatePreset" />

    <p>
      You must also define a <code>tailwind.config.ts</code> file to ensure Tailwind scans your own files
      and any classes used inside the Lumuix package.
    </p>

    <Code lang="ts" :source-code="sourceCode" />
  </div>
</template>
