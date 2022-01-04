<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    message() {
      this.msg = this.$route.params.data;
    },
  },
  mounted() {
    this.message();
  },
};
</script>

<template>
  <h2 class="text-5xl">home</h2>
  <p>{{ msg }}</p>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
