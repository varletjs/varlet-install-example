<script setup lang="ts">
// @ts-ignore
import context from '@varlet/ui/es/context/index.mjs'
import { useParent, useChildren } from '@varlet/use'
import { watch, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const stack = ref<HTMLElement>()
const router = useRouter()
const route = useRoute()
const showParent = ref(true)
const { length, bindChildren } = useChildren<any, any>('ROUTER_STACK')
const { bindParent } = useParent<any, any>('ROUTER_STACK')

function back() {
  router.back()
}

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
    <header class="router-stack-header" :style="{ zIndex: context.zIndex }">
      <var-app-bar :title="route.meta.title" title-position="center">
        <template #left>
          <var-button
            color="transparent"
            text-color="#fff"
            round
            text
            @click="back"
          >
            <var-icon name="chevron-left" :size="30" />
          </var-button>
        </template>
      </var-app-bar>
    </header>
    <div class="router-stack-parent" v-show="showParent">
      <slot />
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
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

  &-header {
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
  }

  &-parent {
    padding-top: 54px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>
