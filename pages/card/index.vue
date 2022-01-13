<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-card :title="title" :description="description" />

    <app-type>Show Subtitle</app-type>
    <var-card :title="title" :subtitle="subtitle" :description="description" />

    <app-type>Show Image</app-type>
    <var-card :title="title" :subtitle="subtitle" :description="description" :src="src" />

    <app-type>Use Slot</app-type>
    <var-card :title="title" :subtitle="subtitle" :description="description" :src="src">
      <template #extra>
        <var-space>
          <var-button type="primary">Use Button</var-button>
          <var-button type="warning">Use Button</var-button>
        </var-space>
      </template>
    </var-card>

    <app-type>Ripple Effect</app-type>
    <var-card :title="title" :subtitle="subtitle" :description="description" ripple />
  </div>
</template>

<script>
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    return {
      title: 'Little Prince',
      subtitle: 'Little prince from',
      src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      description:
        'It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.',
    }
  },
})
</script>
