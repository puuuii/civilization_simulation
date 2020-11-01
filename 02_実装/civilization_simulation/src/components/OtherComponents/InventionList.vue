<template>
<span class="uk-heading-bullet">発明物</span>
<ul uk-accordion>
    <li v-for="(name, i) in Object.entries(inventions)" :key="i">
        <a class="uk-accordion-title" href="#">{{ name[0] }}</a>
        <div class="uk-accordion-content">
          <span>{{ name[1]['category'] }}</span>
          <ul uk-accordion>
              <li v-for="(level, j) in name[1]['level_setting']" :key="j">
                  <a class="uk-accordion-title" href="#">レベル{{j+1}} {{ level['comment'] }}</a>
                  <div class="uk-accordion-content">
                    <table class="uk-table uk-table-small uk-table-justify uk-table-divider">
                        <tbody>
                            <tr>
                                <td>発明確率</td>
                                <td></td>
                                <td>{{ level['invention_probability'] }}</td>
                            </tr>
                            <tr>
                                <td>前提</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>パラメータ</td>
                                <td>
                                  <span v-for="(elem,k) in level['premises']['parameters']" :key="k">{{ elem[0] }}+{{ elem[1] }}　</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>力</td>
                                <td>
                                  <span v-for="(elem,k) in level['premises']['power']" :key="k">{{ elem[0] }}+{{ elem[1] }}　</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>発明</td>
                                <td>
                                  <span v-for="(elem,k) in level['premises']['inventions']" :key="k">{{ elem[0] }}({{ elem[1] }})　</span>
                                </td>
                            </tr>
                            <tr>
                                <td>影響</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>パラメータ</td>
                                <td>
                                  <span v-for="(elem,k) in level['impacts']['parameters']" :key="k">{{ elem[0] }}+{{ elem[1] }}　</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>力</td>
                                <td>
                                  <span v-for="(elem,k) in level['impacts']['power']" :key="k">{{ elem[0] }}+{{ elem[1] }}　</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>発明</td>
                                <td>
                                  <span v-for="(elem,k) in level['impacts']['inventions']" :key="k">{{ elem[0] }}({{ elem[1] }})　</span>
                                </td>
                            </tr>
                            <tr>
                                <td>イベント:</td>
                                <td></td>
                                <td>{{ level['events'] }}</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </li>
          </ul>
        </div>
    </li>
</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InventionList',
  props: {
    inventions: Object,
  },
  setup(props, context) {
  }
});
</script>

<style scoped>
.uk-accordion, .uk-accordion-content {
  padding-left:2rem
}
a {
  color: #666;
}
</style>
