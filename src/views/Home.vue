<template>
  <Post />
</template>

<script>
import Post from "../components/Post.vue";

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
  components: {
    Post,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
