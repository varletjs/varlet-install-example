<template>
  <div class="example">
    <app-type>Function Call</app-type>
    <var-button type="primary" block @click="preview">Basic use</var-button>
    <var-button type="primary" block @click="previewCallback">Handle callback function</var-button>
    <app-type>Component Call</app-type>
    <var-button type="warning" block @click="show = true">Basic use</var-button>
    <var-image-preview :images="image" v-model:show="show" />
    <var-button type="warning" block @click="currentShow = true">Specify initial position</var-button>
    <var-image-preview
      :images="images"
      v-model:show="currentShow"
      current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
    />
    <var-button type="warning" block @click="closeShow = true">Display the close button</var-button>
    <var-image-preview :images="images" v-model:show="closeShow" :closeable="true" />
    <var-button type="warning" block @click="closeEventShow = true">Listen for close event</var-button>
    <var-image-preview :images="images" v-model:show="closeEventShow" @close="handleCloseEvent" />
  </div>
</template>

<script>
import { Snackbar, ImagePreview } from '@varlet/ui'

export default defineComponent({
  name: 'ImagePreviewExample',
  setup() {
    const images = ['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg']

    const image = ['https://varlet.gitee.io/varlet-ui/cat.jpg']

    const handleCloseEvent = () => {
      Snackbar({
        content: 'The shutdown event was triggered.',
        duration: 1000,
      })
    }

    const previewCallback = () => {
      ImagePreview({
        images,
        onChange: (index) => {
          console.log('index', index)
        },
      })
    }

    return {
      preview() {
        ImagePreview(image)
      },
      previewCallback,
      show: ref(false),
      currentShow: ref(false),
      closeShow: ref(false),
      closeEventShow: ref(false),
      images: ref(images),
      image: ref(image),
      handleCloseEvent,
    }
  },
})
</script>

<style lang="less" scoped>
.example {
  .var-button {
    margin-top: 10px;
  }
}
</style>
