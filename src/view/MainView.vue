<template>
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
        <ListPoke />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
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
    };
  },
};
</script>
