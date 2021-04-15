import Axios from "axios";

const actions = {
  // Get Pokemons

  readAll: async function({ commit }) {
    return new Promise((resolve, reject) => {
      Axios({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "get",
        headers: { Authorization: "Bearer sicom" },
      })
        .then((res) => {
          let pokeArray = [];
          res.data.results.map((pok) => {
            pokeArray.push({ name: pok.name, favorite: false });
          });

          commit("setPokemons", pokeArray);

          resolve(pokeArray);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default actions;
