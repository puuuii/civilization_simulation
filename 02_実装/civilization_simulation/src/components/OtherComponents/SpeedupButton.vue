<template>
<button class="uk-button uk-button-default uk-align-right" type="button">
      <img src="../../assets/speedup2.svg"/>{{ button_label }}
</button>
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
        <li v-for="(val, i) in Object.values(speed_mapping)" :key="i"><a @click="on_click_speed">{{ val }}</a></li>
    </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SpeedupButton',
  props: {
    speed_mapping: Object
  },
  emits: ["change_speed"],
  setup(props, context) {
    // data
    let button_label = ref('等速');

    // methods
    const on_click_speed = (e: any) =>{
      const label = e.target.innerText
      button_label.value = label;

      const selected_index = Object.keys(props.speed_mapping as object).filter((key) => {
        if (props.speed_mapping) {
          return props.speed_mapping[key] === label
        }
      })[0]

      context.emit('change_speed', selected_index);
    };

    return {
      button_label, on_click_speed
    }
  }
});
</script>

<style scoped>
.uk-button, .uk-button-default, .uk-align-right {
  width: 10rem;
}
img {
  height: 2em;
  margin: 0.5em;
}
</style>
