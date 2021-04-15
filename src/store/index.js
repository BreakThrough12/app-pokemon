import Vue from "vue";
import Vuex from "vuex";

import pokemon from "./modules/pokemons";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { pokemon },
});
