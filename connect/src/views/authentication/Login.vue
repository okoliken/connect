<template>
  <div class="container mx-auto max-w-sm my-3">
    <h3 class="text-center font-semibold text-xl md:text-2xl my-5 w-full">
      Login Here
    </h3>
    <form @submit.prevent="LogUsersIn(loginDetails)">
      <div class="flex flex-col my-4">
        <label for="">Email</label>
        <input
          type="email"
          class="border p-2 rounded-md"
          v-model="loginDetails.email"
        />
      </div>
      <div class="flex flex-col my-4">
        <label for="">Password</label>
        <input
          type="password"
          class="border p-2 rounded-md"
          v-model="loginDetails.password"
        />
      </div>
      <button
        class="
          text-white
          font-semibold
          py-2
          px-12
          text-center
          bg-gray-900
          w-full
          capitalize
          rounded-lg
        "
      >
        sign in
      </button>
    </form>
    <p class="capitalize font-semibold text-md my-5 text-center">
      Don't have an Account
      <router-link class="text-blue-500" :to="{ name: 'Login' }"
        >sign in</router-link
      >
    </p>
    <p class="capitalize font-semibold text-sm my-3 text-center">
      forgot password?
      <router-link class="text-blue-500" :to="{ name: 'Login' }"
        >click here to reset it</router-link
      >
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      loginDetails: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["LogUsersIn"]),
  },
};
</script>

<style></style>
