<template>
  <div>
    <v-row justify="center" align="center">
      <h3
        style="font-size:36px; font-weight:700;font-family:Lato; line-height:43.2px;color:#353535"
      >
        Uh-oh!
      </h3>
    </v-row>
    <v-row class="mt-5" justify="center" align="center">
      <h3
        style="font-size:20px; font-weight:500;font-family:Lato; line-height:30px;color:#5E5E5E"
      >
        You look lost in your journey!
      </h3>
    </v-row>
    <v-row class="mt-15" justify="center" align="center">
      <v-btn
        :to="{ name: 'Home' }"
        x-large
        rounded
        color="#F22539"
        style="color:white"
        >Go back home</v-btn
      >
    </v-row>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
