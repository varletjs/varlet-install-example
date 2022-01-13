<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-uploader v-model="basicUsageFiles" @after-read="handleBasicUsageAfterRead" />
    <app-type>File Preview</app-type>
    <var-uploader v-model="filePreviewFiles" />
    <app-type>Upload State</app-type>
    <var-uploader v-model="uploadStateFiles" @after-read="handleUploadStateAfterRead" />
    <app-type>File Maxlength</app-type>
    <var-uploader v-model="maxlengthFiles" :maxlength="1" />
    <app-type>File Size Limit</app-type>
    <var-uploader v-model="sizefiles" :maxsize="1024" @oversize="handleOversize" />
    <app-type>Upload Preprocessing</app-type>
    <var-uploader v-model="preprocessingFiles" @before-read="handleBeforeRead" />
    <app-type>Disabled</app-type>
    <var-uploader disabled v-model="disabledFiles" />
    <app-type>Readonly</app-type>
    <var-uploader readonly v-model="readonlyFiles" />
    <app-type>Remove Preprocessing</app-type>
    <var-uploader v-model="beforeRemovefiles" @before-remove="handleBeforeRemove" />
    <app-type>{{ pack.style }}</app-type>
    <var-uploader v-model="styleFiles">
      <var-button type="primary">{{ pack.upload }}</var-button>
    </var-uploader>
    <app-type>Validate</app-type>
    <var-uploader :rules="[(v, u) => u.getError(v).length === 0 || pack.validateMessage]" v-model="validateFiles" />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { Dialog } from '@varlet/ui'
import { VarFile } from '@varlet/ui/types/uploader'
import { pack } from '@varlet/ui/lib/locale'
export default defineNuxtComponent({
  setup() {
    const values = reactive({
      basicUsageFiles: [],
      filePreviewFiles: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        },
        {
          url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
          cover: 'https://varlet.gitee.io/varlet-ui/cover.jpg',
        },
      ],
      uploadStateFiles: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          state: 'loading',
        },
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          state: 'success',
        },
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          state: 'error',
        },
      ],
      maxlengthFiles: [],
      sizefiles: [],
      preprocessingFiles: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        },
      ],
      disabledFiles: [],
      readonlyFiles: [],
      beforeRemovefiles: [],
      styleFiles: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          state: 'error',
        },
      ],
      validateFiles: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          state: 'error',
        },
      ],
    })
    const handleBasicUsageAfterRead = (file: VarFile) => console.log(file)
    const handleUploadStateAfterRead = (file: VarFile) => {
      file.state = 'loading'
      setTimeout(() => {
        file.state = 'success'
      }, 1000)
    }
    const handleOversize = (file: VarFile) => console.log(file)
    const handleBeforeRead = (file: VarFile) => file.file.size <= 1024 * 10
    const handleBeforeRemove = async () => {
      const action = await Dialog({
        title: pack.value.removeTitle,
        message: pack.value.removeMessage,
      })

      return action === 'confirm'
    }
    return {
      pack,
      ...toRefs(values),
      handleBasicUsageAfterRead,
      handleUploadStateAfterRead,
      handleOversize,
      handleBeforeRead,
      handleBeforeRemove,
    }
  },
})
</script>