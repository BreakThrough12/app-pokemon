import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import EvaIcons from "vue-eva-icons";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";
Vue.use(VueRouter);

Vue.use(EvaIcons);

Vue.use(Vuetify);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
