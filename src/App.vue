<template>
  <div id="app">
    <div class="row at-row no-gutter flex-center">
      <div class="col-md-10">
        <div class="at-box-row">
          <at-card>
            <h4 slot="title">
              <at-select v-model="selectVoice" filterable size="large" style="width: 300px">
                <at-option v-for="(voice, index) in voices" :key="index" :value="index">{{ voice.name }}</at-option>
              </at-select>
            </h4>
            <div slot="extra"><at-button type="primary" @click="speech" :disabled="selectVoice === null || inputValue === ''">Read</at-button></div>
            <div>
              <at-textarea v-model="inputValue" min-rows="5" max-rows="10" placeholder="Please input multiline text..."></at-textarea>
            </div>
          </at-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public voices: SpeechSynthesisVoice[] = [];
  public selectVoice: number|null = null;
  public inputValue: string = '';
  public created() {
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
      if (this.voices.length === 0) {
        alert('You don\'t have speechSynthesis');
      }
    };
  }
  public speech() {
    const utter = new SpeechSynthesisUtterance(this.inputValue);
    if (this.selectVoice === null) {
      return;
    }
    utter.voice = this.voices[this.selectVoice];
    window.speechSynthesis.speak(utter);
  }
}
</script>

<style>
#app {
  display: block;
  padding: 50px 0 0 0;
}
.row {
  margin: 0;
}
</style>
