<template>
  <router-view v-slot="{ Component }">
    <transition name="router-stack-view-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.router-stack-view-fade-enter-active,
.router-stack-view-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.router-stack-view-fade-enter-from,
.router-stack-view-fade-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>