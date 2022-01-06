<script>
import { required, minLength, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      v$: useVuelidate(),
      loginDetails: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      loginDetails: {
        email: { required },
        password: { required, minLength: minLength(6) },
      },
    };
  },
  methods: {
    async LogUsersIn(logindata) {
      this.v$.$validate();
      console.log(this.v$);

      if (this.v$.$error) {
        return false;
      } else {
        const response = await axios.post(
          "https://tofumi-universal-api.herokuapp.com/api/v1/login",
          logindata
        );
        const loginData = await response.data;

        console.log(loginData);
        this.$router.push("/");
        sessionStorage.setItem("userToken", loginData.data.access_token);
      }
    },
  },
};
</script>

<template>
  <div class="container mx-auto max-w-sm my-28">
    <h3
      class="text-center text-gray-600 font-semibold text-2xl md:text-2xl my-5 w-full"
    >
      Login Here
    </h3>
    <form @submit.prevent="LogUsersIn(loginDetails)" class="mx-4 sm:mx-0">
      <div class="flex flex-col my-4">
        <label for="">Email</label>
        <input
          :class="[
            v$.loginDetails.email.$error ? 'border-red-500 border-8' : '',
          ]"
          type="email"
          class="border p-2 rounded-md"
          v-model="loginDetails.email"
        />
        <transition name="fade" mode="out-in">
          <span
            class="text-red-500 font-semibold capitalize"
            v-if="v$.loginDetails.email.$error"
          >
            {{ v$.loginDetails.email.$errors[0].$message }}
          </span>
        </transition>
      </div>
      <div class="flex flex-col my-4">
        <label for="">Password</label>
        <input
          :class="[
            v$.loginDetails.password.$error ? 'border-red-500 border-8' : '',
          ]"
          type="password"
          class="border p-2 rounded-md"
          v-model="loginDetails.password"
        />
        <transition name="fade" mode="out-in">
          <span
            class="text-red-500 font-semibold capitalize"
            v-if="v$.loginDetails.email.$error"
          >
            {{ v$.loginDetails.password.$errors[0].$message }}
          </span>
        </transition>
      </div>
      <button
        class="text-white font-semibold py-2 my-3 px-12 text-center bg-gray-900 w-full capitalize rounded-lg"
      >
        sign in
      </button>
    </form>
    <p class="capitalize font-semibold text-md my-5 text-center">
      Don't have an Account
      <router-link class="text-blue-600" :to="{ name: 'Register' }"
        >signup</router-link
      >
    </p>
    <p class="capitalize font-semibold text-sm my-3 text-center">
      forgot password?
      <router-link class="text-blue-600" :to="{ name: 'Register' }"
        >click here to reset it</router-link
      >
    </p>
  </div>
</template>

<style></style>
