<script setup lang="ts">
// @ts-ignore
import context from '@varlet/ui/es/context/index.mjs'
import { useParent, useChildren } from '@varlet/use'
import { watch, ref, nextTick } from 'vue'

defineProps({
  keepAlive: {
    type: Boolean,
    default: true,
  },
})

const stack = ref<HTMLElement>()
const showParent = ref(true)
const { length, bindChildren } = useChildren<any, any>('ROUTER_STACK')
const { bindParent } = useParent<any, any>('ROUTER_STACK')

bindChildren({})
bindParent?.({})

const savedPosition = { top: 0, left: 0 }

watch(
  () => length.value,
  async (value) => {
    const shouldShowParent = value === 0

    if (!shouldShowParent) {
      showParent.value = shouldShowParent
      savedPosition.top = stack.value!.scrollTop
      savedPosition.left = stack.value!.scrollLeft
    } else {
      setTimeout(async () => {
        showParent.value = shouldShowParent
        await nextTick()
        stack.value?.scrollTo(savedPosition)
      }, 250)
    }
  }
)

context.zIndex += 1
</script>

<template>
  <div class="router-stack" ref="stack" :style="{ zIndex: context.zIndex }">
    <app-header />

    <keep-alive v-if="keepAlive">
      <div class="router-stack-parent" v-if="showParent">
        <slot />
      </div>
    </keep-alive>
    <div class="router-stack-parent" v-show="showParent" v-else>
      <slot />
    </div>

    <router-stack-view />
  </div>
</template>

<style lang="less" scoped>
.router-stack {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  color: var(--color-text);
  background-color: var(--color-body);

  &-parent {
    padding-top: 54px;
  }
}
</style>
