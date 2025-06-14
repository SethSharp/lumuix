<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@sethsharp/lumuix'
import { AlertCircle, InfoIcon, CheckCircleIcon, XCircle } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-2">
    <Alert variant="success">
      <CheckCircleIcon />

      <AlertTitle>
        Success!
      </AlertTitle>

      <AlertDescription>
        Hey you did it - nice work!
      </AlertDescription>
    </Alert>

    <Alert variant="info">
      <InfoIcon />

      <AlertTitle>
        Info!
      </AlertTitle>

      <AlertDescription>
        Remember that this is a friendly reminder!
      </AlertDescription>
    </Alert>

    <Alert variant="warning">
      <AlertCircle />

      <AlertTitle>
        Warning!
      </AlertTitle>

      <AlertDescription>
        Don't worry nothing too serious!
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <XCircle />

      <AlertTitle>
        Danger!
      </AlertTitle>

      <AlertDescription>
        Now things are getting dangerous
      </AlertDescription>
    </Alert>
  </div>
</template>
