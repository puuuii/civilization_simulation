<template>
<div width="100%">
  <div id="game-app"></div>
</div>
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
  },
  setup(props, context) {
    // data
    const config = JSON.parse(localStorage.getItem('config') as string);
    const resolution = { width: 1280, height: 760 };

    // mounted
    onMounted(() => {
      const game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game-app',
        width: resolution.width,
        height: resolution.height,
        audio: {
          disableWebAudio: true
        },
        scene: [ Top, Setting, CreateWorld, Game ]
      });
    });

    return {
    }
  }
});
</script>

<style scoped>
#game-app {
  width: fit-content;
  margin: 2rem auto 0 auto;
}
</style>
