<template>
  <div class="example">
    <app-type> Basic AppBar</app-type>
    <var-app-bar title="Title" />

    <app-type> Custom Style </app-type>
    <var-app-bar title="Title" title-position="center" color="#ff9f00" />

    <app-type>Add Slots At Title</app-type>
    <var-app-bar>Add The Title From The Slot</var-app-bar>

    <app-type>Add Left Slot</app-type>
    <var-app-bar title="Title">
      <template #left>
        <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
          <var-icon name="chevron-left" :size="24" />
        </var-button>
      </template>
    </var-app-bar>

    <app-type>Add Right Slot</app-type>
    <var-app-bar title="Title">
      <template #right>
        <var-button round text color="transparent" text-color="#ffffff" @Click="searchData">
          <var-icon name="magnify" :size="24" />
        </var-button>
      </template>
    </var-app-bar>

    <app-type>Add Left And Right Slot</app-type>
    <var-app-bar title="Title">
      <template #left>
        <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
          <var-icon name="chevron-left" :size="24" />
        </var-button>
      </template>
      <template #right>
        <var-menu :offset-y="42" :offset-x="-36" v-model:show="offsetY">
          <var-button round text color="transparent" text-color="#ffffff" @click="offsetY = true">
            <var-icon name="menu" :size="24" />
          </var-button>

          <template #menu>
            <div class="menu-list">
              <var-cell class="menu-cell" v-for="value in menuList" :key="value.value" v-ripple>
                {{ value.label }}
              </var-cell>
            </div>
          </template>
        </var-menu>
      </template>
    </var-app-bar>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { Snackbar } from '@varlet/ui'

export default defineNuxtComponent({
  setup() {
    const offsetY = ref(false)
    const menuList = ref([
      { label: 'options1', value: 'menu1' },
      { label: 'options2', value: 'menu2' },
    ])

    const goBack = () => {
      Snackbar('Go Back')
    }

    const searchData = () => {
      Snackbar({
        content: 'search',
        position: 'top',
      })
    }

    return {
      offsetY,
      menuList,
      goBack,
      searchData,
    }
  },
})
</script>
