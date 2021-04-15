<template>
  <v-app style="background-color:#f9f9f9;">
    <v-container v-if="loading" bg fill-height grid-list-md text-center>
      <v-layout row wrap align-center>
        <v-flex>
          <Loader />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else bg grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex>
          <ListPoke :condition="{ condition }" :pokemons="{ pokemons }" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer v-if="!loading" absolute>
      <v-row
        class="mt-5 mb-5"
        justify="center "
        align-content="center"
        no-gutters
      >
        <v-col class="text-center mr-md-8 mr-sm-10" md="2" sm="5">
          <v-btn
            :color="allBtn ? '#F22539' : '#BFBFBF'"
            elevation="0"
            class="btn"
            style="color:white"
            rounded
            large
            @click="
              () => {
                allBtn = true;
                favoriteBtn = false;
                condition = false;
              }
            "
            ><v-icon color="white" left>mdi-format-list-bulleted</v-icon>
            All</v-btn
          >
        </v-col>
        <v-col class="text-center ml-md-8 ml-sm-10" md="2" sm="5">
          <v-btn
            style="color:white"
            elevation="0"
            :color="favoriteBtn ? '#F22539' : '#BFBFBF'"
            class="btn"
            @click="
              () => {
                allBtn = false;
                favoriteBtn = true;
                condition = true;
              }
            "
            rounded
            large
          >
            <v-icon left>mdi-star</v-icon> Favorite</v-btn
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Loader from "../components/Loader";
import ListPoke from "../components/ListPoke";

export default {
  name: "MainView",
  components: {
    Loader,
    ListPoke,
  },
  data() {
    return {
      loading: false,
      allBtn: true,
      favoriteBtn: false,
      condition: false,
    };
  },
  methods: {
    ...mapActions("pokemon", ["readAll"]),
  },
  computed: {
    ...mapState("pokemon", ["pokemons"]),
  },
  mounted() {
    console.log("mounted");
    this.loading = true;
    this.readAll().then((res) => {
      if (res) {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    });
  },
};
</script>
<style>
.btn {
  color: white;
  width: 16vw;
}

@media screen and (max-width: 769px) {
  .btn {
    color: white;
    width: 300px;
  }
}
</style>
