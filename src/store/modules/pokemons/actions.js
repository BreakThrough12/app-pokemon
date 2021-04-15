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
  readOne: async function({ commit }, name) {
    return new Promise((resolve, reject) => {
      Axios({
        url: "https://pokeapi.co/api/v2/pokemon/" + name,
        method: "get",
        headers: { Authorization: "Bearer sicom" },
      })
        .then((res) => {
          let pokemon = {
            weight: res.data.weight,
            height: res.data.height,
            types: res.data.types ? res.data.types : "None",
            image: res.data.sprites.front_default,
          };
          console.log(res.data.sprites.front_default);
          console.log(res.data.weight);
          console.log(res.data.height);
          console.log("tipos:", res.data.types);

          commit("setPokemon", pokemon);

          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default actions;
