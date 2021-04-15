import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    pokemons: [],
    loadingData: false,
  },
  actions,
  mutations,
};
