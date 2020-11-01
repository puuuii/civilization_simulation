<template>
<span class="uk-heading-bullet">{{ title }}</span>
<div uk-slider="finite: true">
    <div class="uk-position-relative">
        <div class="uk-slider-container">
            <div class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m">
              <div v-for="(item, i) in items" :key="i" class="uk-card uk-card-defadivt uk-card-hover uk-card-body">
                  <p>{{ item }}</p>
              </div>
            </div>
        </div>
        <div class="uk-hidden@s">
            <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
        <div class="uk-visible@s">
            <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleSlider',
  props: {
    title: String,
    items: Array,
  }
});
</script>

<style scoped>
</style>
