<template>
<div id="game-app"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import SpeedupButton from '../OtherComponents/SpeedupButton.vue';
import * as Phaser from 'phaser';
import { MyScene } from '../../tses/scenes/top';

export default defineComponent({
  name: 'SimulationPage',
  components: {
    SpeedupButton
  },
  setup(props, context) {
    // data
    const config = JSON.parse(localStorage.getItem('config') as string);

    // mounted
    onMounted(() => {
      const game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game-app',
        width: 1280,
        height: 760,
        audio: {
          disableWebAudio: true
        },
        scene: [ MyScene ]
      });
    });

    return {
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
