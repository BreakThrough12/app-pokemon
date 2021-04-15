<template>
  <div>
    <v-row class="mt-10 mb-6" align="center" justify="center">
      <v-col cols="10" md="6" sm="11">
        <v-text-field
          elevation="0"
          prepend-inner-icon="mdi-magnify"
          label="Solo"
          solo
          v-model="searchName"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="scrollbar list">
      <template v-if="pokeList.length === 0">
        <div>
          <h3>No hay ninguno</h3>
        </div>
      </template>

      <v-row
        v-bind:key="pokemon.name"
        v-for="pokemon in pokeList"
        align="center"
        justify="center"
      >
        <v-col cols="10" md="6" sm="11">
          <v-card elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-col cols="10"
                ><v-card-title>{{
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                }}</v-card-title></v-col
              >
              <v-col class="ml-md-5" justify-center cols="1"
                ><v-btn
                  @click="pokemon.favorite = !pokemon.favorite"
                  :ripple="false"
                  color="#E8E8E8"
                  small
                  elevation="0"
                  fab
                  ><img
                    width="25"
                    height="25"
                    :src="getImgUrl(pokemon.favorite)"
                    alt="star"
                /></v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListPoke",
  data() {
    return {
      favorite: false,
      searchName: "",
    };
  },
  props: ["pokemons", "condition"],
  methods: {
    getImgUrl(favorite) {
      console.log(this.pokemons.pokemons);
      if (!favorite) return require("../assets/img/Vector.png");
      else return require("../assets/img/Vector2.png");
    },
  },
  computed: {
    pokeList() {
      console.log(this.searchName);

      return this.pokemons.pokemons.filter((pokemon) => {
        return pokemon.name?.includes(this.searchName);
      });
    },
    pokeListFav() {
      return this.pokemons.pokemons.filter((pokemon) => {
        return pokemon.favorite === true;
      });
    },
  },
};
</script>
<style>
.icon {
  font-size: 48px;
}
.scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.list {
  height: 67vh;
  overflow-y: auto;
  overflow-x: hidden;
}
@media screen and (max-width: 769px) {
  .list {
    height: 77vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
