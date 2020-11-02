<template>
<div class="uk-panel"><span class="uk-align-right">{{ display_world_time }}</span></div>

<speedup-button :speed_mapping="speed_mapping" @change_speed='change_speed'/>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import SpeedupButton from '../OtherComponents/SpeedupButton.vue';

export default defineComponent({
  name: 'SimulationPage',
  components: {
    SpeedupButton
  },
  setup(props, context) {
    // data
    let world_time = reactive({
      year: 1,
      month: 1,
      week: 1,
    })

    const speed_mapping  = {
      0: '等速', 1: '2倍速', 2: '4倍速', 3: '8倍速', 4: '16倍速', 5: '32倍速', 6: '64倍速', 7: '128倍速', 8: '256倍速'
    }

    let timer_id = 0

    const config = JSON.parse(localStorage.getItem('config') as string);

    // computed
    const display_world_time = computed(() => {
      return `${world_time.year}年${world_time.month}月${world_time.week}週`
    });

    // method
    const set_world_time = (speed_index:number) => {
      timer_id = setInterval(() => {
        if (++world_time.week === 5) {
          world_time.week = 1;
          if (++world_time.month === 13) {
            world_time.month = 1;
            world_time.year++;
          }
        }
      }, 1000 / (2**speed_index))
    };

    const change_speed = (index: number) => {
      clearInterval(timer_id)
      set_world_time(index);
    };

    // mounted
    onMounted(() => {
      set_world_time(0);
    });

    return {
      speed_mapping, world_time, display_world_time, change_speed
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
