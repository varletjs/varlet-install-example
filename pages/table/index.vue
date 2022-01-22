<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Math</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jerry</td>
          <td>124</td>
          <td>38</td>
        </tr>
        <tr>
          <td>Tom</td>
          <td>100</td>
          <td>135</td>
        </tr>
      </tbody>
    </var-table>

    <app-type>Footer Slots</app-type>
    <var-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Math</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in list" :key="l.name">
          <td>{{ l.name }}</td>
          <td>{{ l.math }}</td>
          <td>{{ l.english }}</td>
        </tr>
      </tbody>

      <template #footer>
        <div class="footer">
          <var-pagination :current="1" :total="100" :size-option="[5, 10]" @change="get" />
        </div>
      </template>
    </var-table>
  </div>
</template>
<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const gen = (current, size) => {
      return Array.from({ length: size }).map((_, index) => {
        const id = (current - 1) * size + index + 1

        return {
          name: `Name ${id}`,
          math: id,
          english: id,
        }
      })
    }
    const list = ref(gen(1, 10))

    const get = (current, size) => {
      list.value = gen(current, size)
    }

    return {
      list,
      get,
    }
  },
})
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}
</style>
