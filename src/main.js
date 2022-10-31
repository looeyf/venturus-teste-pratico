import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// global styles
import "./styles/index.scss";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
