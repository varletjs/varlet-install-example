<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-pagination :current="3" :total="120" />

    <app-type>Hide Size Changer</app-type>
    <var-pagination :current="3" :total="120" :show-size-changer="false" />

    <app-type>Show Total</app-type>
    <var-pagination :current="3" :total="120" :show-total="(total) => ` ${total} items`" />

    <app-type>Disabled</app-type>
    <var-pagination :current="3" :total="120" disabled />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'

export default defineNuxtComponent({
  name: 'PaginationExample',
  components: {
    AppType,
  },
})
</script>
