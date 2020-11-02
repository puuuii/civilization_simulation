<template>
<next-button @on_click_next="on_click_next"/>

<input-config :config="config"/>

<hr>

<title-slider title="文明パラメータ" :items="config['civilization_parameter']"/>

<hr>

<title-slider title="文明力" :items="config['civilization_power']"/>

<hr>

<invention-list :inventions="config['inventions']"/>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import NextButton from '../OtherComponents/NextButton.vue';
import InputConfig from '../OtherComponents/InputConfig.vue';
import TitleSlider from '../OtherComponents/TitleSlider.vue';
import InventionList from '../OtherComponents/InventionList.vue';
import default_config from '../../../settings/civilization_setting.json';

export default defineComponent({
  name: 'TopPage',
  props: {
    current_page: Number
  },
  components: {
    TitleSlider, InventionList, InputConfig, NextButton
  },
  setup(props, context) {
    // data
    let config = reactive<any>(localStorage.getItem("config") === null ? default_config : JSON.parse(localStorage.getItem('config') as string));

    const on_click_next = () => {
      context.emit('on_click_next');
      localStorage.setItem('config', JSON.stringify(config));
    }

    // expose to template
    return{
      config, on_click_next
    }
  }
});
</script>

<style scoped>
.uk-container,.uk-card-default {
  padding: 5rem;
}
</style>
