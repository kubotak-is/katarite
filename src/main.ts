import Vue from 'vue';
// tslint:disable-next-line:no-var-requires
const AtComponents = require('at-ui'); // 型がないやんけ
import 'at-ui-style';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(AtComponents);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
