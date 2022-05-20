<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-bottom-navigation v-model:active="basicUsage">
      <var-bottom-navigation-item label="label" icon="home" />
      <var-bottom-navigation-item label="label" icon="magnify" />
      <var-bottom-navigation-item label="label" icon="heart" />
      <var-bottom-navigation-item label="label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>Match by name</app-type>
    <var-bottom-navigation v-model:active="matchByName">
      <var-bottom-navigation-item name="home" label="label" icon="home" />
      <var-bottom-navigation-item name="search" label="label" icon="magnify" />
      <var-bottom-navigation-item name="heart" label="label" icon="heart" />
      <var-bottom-navigation-item name="user" label="label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>Show Badge</app-type>
    <var-bottom-navigation v-model:active="showBadge">
      <var-bottom-navigation-item label="label" icon="home" />
      <var-bottom-navigation-item label="label" icon="magnify" badge />
      <var-bottom-navigation-item label="label" icon="heart" :badge="badgeProps" />
      <var-bottom-navigation-item label="label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>Custom Color</app-type>
    <var-bottom-navigation active-color="#ba68c8" v-model:active="customColor">
      <var-bottom-navigation-item label="label" icon="home" />
      <var-bottom-navigation-item label="label" icon="magnify" />
      <var-bottom-navigation-item label="label" icon="heart" />
      <var-bottom-navigation-item label="label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>Change Event</app-type>
    <var-bottom-navigation v-model:active="changeEvent" @change="handleChange">
      <var-bottom-navigation-item label="label" icon="home" />
      <var-bottom-navigation-item label="label" icon="magnify" />
      <var-bottom-navigation-item label="label" icon="heart" />
      <var-bottom-navigation-item label="label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>Click Event</app-type>
    <var-bottom-navigation v-model:active="clickEvent">
      <var-bottom-navigation-item @click="handleClick" label="label" icon="home" />
      <var-bottom-navigation-item @click="handleClick" label="label" icon="magnify" />
      <var-bottom-navigation-item @click="handleClick" label="label" icon="heart" />
      <var-bottom-navigation-item @click="handleClick" label="label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>Fab</app-type>
    <var-bottom-navigation v-model:active="fab" @fab-click="isEven = !isEven" style="margin-top: 10px">
      <template #fab>
        <div class="fab_example">
          <var-icon name="plus" color="#fff" size="24" />
        </div>
      </template>
      <var-bottom-navigation-item label="label" icon="home" />
      <var-bottom-navigation-item label="label" icon="magnify" />
      <var-bottom-navigation-item label="label" icon="heart" />
      <var-bottom-navigation-item label="label" icon="bell" />
      <var-bottom-navigation-item v-if="!isEven" label="label" icon="account-circle" />
    </var-bottom-navigation>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { ref } from 'vue'
import {Snackbar} from "@varlet/ui";

export default defineNuxtComponent({
  name: 'BottomNavigationExample',
  components: {
    AppType,
  },
  setup() {
    const basicUsage = ref(0)

    const matchByName = ref('home')

    const showBadge = ref(0)
    const badgeProps = {
      type: 'primary',
      value: '66',
    }

    const customColor = ref(0)

    const changeEvent = ref(0)

    function handleChange(active) {
      Snackbar.info(`changed to ${active}`)
    }

    const clickEvent = ref(0)

    function handleClick(active) {
      Snackbar.success(`clicked ${active}`)
    }

    const fab = ref(0)
    const isEven = ref(true)

    return {
      basicUsage,
      matchByName,
      showBadge,
      badgeProps,
      customColor,
      changeEvent,
      handleChange,
      clickEvent,
      handleClick,
      fab,
      isEven,
    }
  }
})
</script>
