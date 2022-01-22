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

    <app-type>Customize upload styles</app-type>
    <var-uploader v-model="styleFiles">
      <var-button type="primary">Upload</var-button>
    </var-uploader>

    <app-type>Validate</app-type>
    <var-uploader
      :rules="[(v, u) => u.getError(v).length === 0 || 'There is a file that failed to upload']"
      v-model="validateFiles"
    />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { Dialog } from '@varlet/ui'
import { VarFile } from '@varlet/ui/types/uploader'
import { reactive, toRefs } from 'vue'
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
      styleFiles: [],
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
        title: 'Delete or not?',
        message: 'Cannot be withdrawn after deletion',
      })

      return action === 'confirm'
    }
    return {
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
