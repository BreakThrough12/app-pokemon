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
      <template>
        <v-row
          v-bind:key="pokemon.name"
          v-for="pokemon in pokeList"
          align="center"
          justify="center"
        >
          <v-col cols="10" md="6" sm="11">
            <v-card elevation="0">
              <v-row no-gutters justify="center" align="center">
                <v-col
                  @click="
                    () => {
                      findInfo(pokemon.name);
                    }
                  "
                  cols="10"
                  style="cursor:pointer"
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
      </template>
      <PokeInfo
        :name="{ name }"
        :pokemon="{ dataPokemon }"
        :dialog.sync="show"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import PokeInfo from "./PokeInfo";
export default {
  name: "ListPoke",
  components: {
    PokeInfo,
  },
  data() {
    return {
      favorite: false,
      searchName: "",
      show: false,
      dataPokemon: undefined,
    };
  },
  props: ["pokemons", "condition"],
  methods: {
    ...mapActions("pokemon", ["readOne"]),
    findInfo(name) {
      this.readOne(name).then((res) => {
        if (res) {
          this.show = true;
          this.name = name;
          this.dataPokemon = this.pokemon;
        }
      });
    },
    getImgUrl(favorite) {
      if (!favorite) return require("../assets/img/Vector.png");
      else return require("../assets/img/Vector2.png");
    },
  },
  computed: {
    ...mapState("pokemon", ["pokemon"]),
    pokeList() {
      return this.pokemons.pokemons.filter((pokemon) => {
        return pokemon.name?.includes(this.searchName.toLowerCase());
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
  height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
}
@media screen and (max-width: 769px) {
  .list {
    height: 73vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
