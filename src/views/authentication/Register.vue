<script>
import { computed, reactive } from "vue";
import useValidate from "@vuelidate/core";

import { required, email, minLength, sameAs } from "@vuelidate/validators";
import router from "../../router";

// import axios from "axios";
export default {
  setup() {
    const state = reactive({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
    });

    const rules = computed(() => {
      return {
        first_name: { required },
        last_name: { required },
        phone: { required },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirm_password: { required, sameAs: sameAs(state.password) },
      };
    });

    const v$ = useValidate(rules, state);

    // AYSNC FUNCTION
    const handleSubmit = async (state) => {
      const {
        first_name,
        last_name,
        phone,
        email,
        password,
        confirm_password,
      } = state;

      const data = {
        first_name,
        last_name,
        phone,
        email,
        password,
        confirm_password,
      };

      try {
        const res = await fetch(
          "https://tofumi-universal-api.herokuapp.com/api/v1/register",
          {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(data),
          }
        );

        const datar = await res.json();
        router.push({ name: "Login" });

        console.log(datar);
      } catch (error) {
        console.log(error);
      }
    };

    return { state, handleSubmit, v$ };
  },
};
</script>

<template>
  <div class="container mx-auto max-w-sm my-3">
    <h3 class="text-center font-semibold text-xl md:text-2xl my-5 w-full">
      Welcome, fill the form below to get started
    </h3>
    <form @submit.prevent="handleSubmit(state)">
      <div class="flex flex-col my-4">
        <label for="">Firstname</label>
        <input
          type="text"
          class="border p-2 rounded-md"
          v-model="state.first_name"
        />
      </div>
      <div class="flex flex-col my-4">
        <label for="">Lastname</label>
        <input
          type="text"
          class="border p-2 rounded-md"
          v-model="state.last_name"
        />
      </div>
      <div class="flex flex-col my-4">
        <label for="">PhoneNumber</label>
        <input
          type="number"
          class="border p-2 rounded-md"
          v-model="state.phone"
        />
      </div>
      <div class="flex flex-col my-4">
        <label for="">Email</label>
        <input
          type="email"
          class="border p-2 rounded-md"
          v-model="state.email"
        />
      </div>
      <div class="flex flex-col my-4">
        <label for="">Password</label>
        <input
          type="password"
          class="border p-2 rounded-md"
          v-model="state.password"
        />
      </div>
      <div class="flex flex-col my-4">
        <label for="">Confirm Password</label>
        <input
          type="password"
          class="border p-2 rounded-md"
          v-model="state.confirm_password"
        />
      </div>
      <button
        class="text-white font-semibold py-2 px-12 text-center bg-gray-900 w-full capitalize rounded-lg"
      >
        sign up
      </button>
    </form>
    <p class="capitalize font-semibold text-md my-3 text-center">
      Don't have an Account
      <router-link class="text-blue-500" :to="{ name: 'Login' }"
        >sign in</router-link
      >
    </p>
  </div>
</template>

<style></style>
