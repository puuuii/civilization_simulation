<template>
<top-page @on_click_next="on_click_next_from_toppage" v-if="is_toppage"/>
<simulation-page v-if="is_simpage"/>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import 'uikit/dist/css/uikit.min.css'

import TopPage from './components/PageComponents/TopPage.vue'
import SimulationPage from './components/PageComponents/SimulationPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    TopPage, SimulationPage
  },
  setup(props, context) {
    // data
    let current_page = ref(0);

    // computed
    const is_toppage = computed((): boolean => {
      return current_page.value === 0 ? true : false;
    })
    const is_simpage = computed((): boolean => {
      return current_page.value === 1 ? true : false;
    })

    // method
    const on_click_next_from_toppage = () => {
      current_page.value++;
    };

    return {
      current_page, is_toppage, on_click_next_from_toppage, is_simpage
    }
  }
});
</script>

<style>
.uk-container,.uk-card-default {
  padding: 5rem;
}
</style>
