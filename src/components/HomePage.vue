<template>
  <div>
    <v-row class="mt-15" style="text-align:center" justify="center">
      <v-col cols="12" class="mt-15">
        <img width="300" height="300" src="../assets/img/pikachuwhite.png" />
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-15">
      <h3 class="font-title">Welcome to Pokedex</h3>
    </v-row>
    <v-row justify="center" class="mt-15">
      <v-col lg="5" md="5" sm="6" class="pl-15 pr-15">
        <h3 class="font-subtitle">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-15 mb-15">
      <v-btn
        :to="{ name: 'Main' }"
        style="color:white"
        rounded
        x-large
        color="#F22539"
        >Get Started</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
.font-title {
  font-size: 26px;
  font-weight: 700;
  line-height: 31.2px;
  text-align: center;
}
.font-subtitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
}
</style>
