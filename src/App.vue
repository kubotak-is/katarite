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
            <div slot="extra"><at-button type="primary" @click="speech" :disabled="selectVoice === null || inputValue === ''">Speech</at-button></div>
            <div>
              <at-textarea v-model="inputValue" min-rows="5" max-rows="20" placeholder="Please input multiline text..."></at-textarea>
            </div>
          </at-card>
          <p>※１行が長文の場合は再生が途切れることがあります。適宜改行を加えることで再生できます。</p>
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
    if (this.selectVoice === null) {
      return;
    }
    window.speechSynthesis.cancel();
    const voice = this.selectVoice;
    this.inputValue.split(/\r\n|\r|\n/).forEach((v: string) => {
      const utter = new SpeechSynthesisUtterance(v);
      utter.voice = this.voices[voice];
      window.speechSynthesis.speak(utter);
    });
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
p {
  padding: 1rem 0;
}
</style>
