<script setup lang="ts">
import { User } from 'lucide-vue-next'
import {
  Kpi, KpiContent, KpiTitle, KpiCount, KpiIcon
} from '@sethsharp/lumuix'
</script>

<template>
  <div class="grid grid-cols-4">
    <Kpi>
      <KpiIcon>
        <User />
      </KpiIcon>

      <KpiContent>
        <KpiTitle>
          Users
        </KpiTitle>
        <KpiCount>
          1,090
        </KpiCount>
      </KpiContent>
    </Kpi>

    <Kpi variant="destructive">
      <KpiIcon>
        <User />
      </KpiIcon>

      <KpiContent>
        <KpiTitle>
          Profit
        </KpiTitle>
        <KpiCount>
          $69,420
        </KpiCount>
      </KpiContent>
    </Kpi>

    <Kpi variant="warning">
      <KpiIcon>
        <User />
      </KpiIcon>

      <KpiContent>
        <KpiTitle>
          Users
        </KpiTitle>
        <KpiCount>
          +/-20
        </KpiCount>
      </KpiContent>
    </Kpi>

    <Kpi variant="success">
      <KpiIcon>
        <User />
      </KpiIcon>

      <KpiContent>
        <KpiTitle>
          Attention
        </KpiTitle>
        <KpiCount>
          100%
        </KpiCount>
      </KpiContent>
    </Kpi>
  </div>
</template>

