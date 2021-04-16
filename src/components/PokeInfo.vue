<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog" max-width="870">
      <v-card>
        <v-img height="250" :src="require('../assets/img/background.png')">
          <v-row style="text-align:right" class="mt-4 mr-4" justify="end">
            <v-col>
              <v-btn small fab @click.native="close"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </v-col>
          </v-row>
          <v-img
            class="mt-8"
            contain
            height="140"
            :src="pokemon.dataPokemon.image"
          >
          </v-img>
        </v-img>
        <v-card-title>
          <h3 style="font-size: 18px;line-height: 27px;font-weight: 700;">
            Name:
          </h3>
          <h3
            style="font-size: 18px;line-height: 27px;font-weight: 500;"
            class="subtitle"
          >
            {{ name.name.charAt(0).toUpperCase() + name.name.slice(1) }}
          </h3>
        </v-card-title>
        <v-divider class="mr-6 ml-6"></v-divider>
        <v-card-title>
          <h3 style="font-size: 18px;line-height: 27px;font-weight: 700;">
            Weight:
          </h3>
          <h3
            style="font-size: 18px;line-height: 27px;font-weight: 500;"
            class="subtitle"
          >
            {{ pokemon.dataPokemon.weight }}
          </h3>
        </v-card-title>
        <v-divider class="mr-6 ml-6"></v-divider>
        <v-card-title>
          <h3 style="font-size: 18px;line-height: 27px;font-weight: 700;">
            Height:
          </h3>

          <h3
            style="font-size: 18px;line-height: 27px;font-weight: 500;"
            class="subtitle"
          >
            {{ pokemon.dataPokemon.height }}
          </h3>
        </v-card-title>
        <v-divider class="mr-6 ml-6"></v-divider>
        <v-card-title>
          <h3 style="font-size: 18px;line-height: 27px;font-weight: 700;">
            Types:
          </h3>
          <template v-for="(type, index) in pokemon.dataPokemon.types">
            <h3
              v-bind:key="type.type.name"
              class="subtitle"
              style="font-size: 18px;line-height: 27px;font-weight: 500;"
            >
              {{
                type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
              }}
            </h3>
            <h3
              v-if="index < pokemon.dataPokemon.types.length - 1"
              v-bind:key="type.type.name"
            >
              ,
            </h3>
          </template>
        </v-card-title>
        <v-divider class="mr-6 ml-6"></v-divider>
        <v-row justify="center" align="center" no-gutters>
          <v-col class="mt-5 mb-5 ml-6">
            <v-btn x-large rounded color="#F22539" style="color:white"
              >Share to My Friends</v-btn
            >
          </v-col>

          <template v-if="fav.fav">
            <v-col class="ml-15">
              <v-img
                class="ml-15"
                contain
                height="40"
                :src="require('../assets/img/Active.png')"
              >
              </v-img>
            </v-col>
          </template>
          <template v-else>
            <v-col class="ml-15">
              <v-img
                class="ml-15"
                contain
                height="40"
                :src="require('../assets/img/Disabled.png')"
              >
              </v-img>
            </v-col>
          </template>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "PokeInfo",

  props: {
    pokemon: {
      default: {},
    },
    name: {
      default: "",
    },
    dialog: {
      default: false,
    },
    fav: {
      default: false,
    },
  },

  methods: {
    close() {
      this.$emit("update:dialog", false);
    },
  },
};
</script>
<style>
.title {
  font-family: "Lato" sans;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
}

.subtitle {
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  margin-left: 5px;
}
</style>
