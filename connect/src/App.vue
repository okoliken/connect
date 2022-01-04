<script>
import Navbar from "./components/Navbar.vue";
export default {
  setup() {},
  components: { Navbar },
};
</script>

<template>
  <Navbar />

  <router-view />
</template>

<style>
body {
  font-family: roboto !important;
}
</style>
