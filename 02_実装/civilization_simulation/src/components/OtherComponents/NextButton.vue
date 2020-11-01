<template>
<div class="uk-panel">
  <button class="uk-button uk-button-default uk-align-right" @click="on_click_next()">
    <img src="../../assets/next.svg"/>
    <span>　シミュレーションへ進む</span>
  </button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NextButton',
  setup(props, context) {
    // methods
    const on_click_next = () =>{
      context.emit('on_click_next')
    };

    return {
      on_click_next
    }
  }
});
</script>

<style scoped>
img {
  height: 2em;
  margin: 0.5em;
}
</style>
