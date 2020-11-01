<template>
<div class="js-upload uk-placeholder uk-text-center">
    <span uk-icon="icon: cloud-upload"></span>
    <span class="uk-text-middle">文明構成書をココにドラッグ&ドロップするか</span>
    <div uk-form-custom>
        <input type="file" @change="on_file_change">
        <span class="uk-link">ココを選択してください</span>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputConfig',
  props: {
    config: {} as any
  },
  setup(props, context) {
    // methods
    const on_file_change = (e: any) => {
      const file = (e.target.files || e.dataTransfer.files)[0];
      let reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener('load', function() {
        const str_json: string = reader.result as string;
        const new_config = JSON.parse(str_json);
        Object.keys(new_config).forEach((key:any) => {
          props.config[key] = new_config[key]
        })
      })
    };

    return {
      on_file_change
    }
  }
});
</script>

<style scoped>
</style>
