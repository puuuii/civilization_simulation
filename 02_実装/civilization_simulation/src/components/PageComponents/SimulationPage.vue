<template>
<div id="game-app"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import SpeedupButton from '../OtherComponents/SpeedupButton.vue';
import * as Phaser from 'phaser';
import { Top } from '../../tses/scenes/top';
import { Setting } from '../../tses/scenes/setting';
import { CreateWorld } from '../../tses/scenes/createWorld';
import { Game } from '../../tses/scenes/game';

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
        scene: [ Top ]
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
