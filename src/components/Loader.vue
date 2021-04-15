<template>
  <v-row align="center" justify="center">
    <img
      class="rotate"
      width="150"
      height="150"
      src="../assets/img/Loader.png"
    />
  </v-row>
</template>
<script>
export default {
  name: "Loader",
};
</script>
<style>
.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
