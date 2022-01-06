<script>
import { computed, reactive, ref } from "vue";
import useValidate from "@vuelidate/core";

import { required, email, minLength, sameAs } from "@vuelidate/validators";
import AuthLoader from "../../components/AuthLoader.vue";

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

    const AuthSpinner = ref(false);

    const v$ = useValidate(rules, state);

    return { state, v$, AuthSpinner };
  },
  components: {
    AuthLoader,
  },
  methods: {
    async handleSubmit(state) {
      console.log(this.v$);
      const {
        first_name,
        last_name,
        phone,
        email,
        password,
        confirm_password,
      } = state;
      this.v$.$validate();

      if (this.v$.$error) {
        return false;
      } else {
        const data = {
          first_name,
          last_name,
          phone,
          email,
          password,
          confirm_password,
        };
        console.log(data);
        try {
          this.AuthSpinner = true;
          const res = await fetch(
            "https://tofumi-universal-api.herokuapp.com/api/v1/register",
            {
              headers: { "Content-type": "application/json" },
              method: "POST",
              body: JSON.stringify(data),
            }
          );

          const datar = await res.json();

          this.$router.push({ name: "Login" });
          setTimeout(() => {
            this.AuthSpinner = false;
          }, 3000);
          console.log(datar);
        } catch (error) {
          this.AuthSpinner = true;
          console.log(error);
        }
      }
    },
  },
};
</script>

<template>
  <AuthLoader v-if="AuthSpinner" />
  <div class="container mx-auto max-w-md my-16">
    <h3 class="text-center font-semibold text-xl md:text-2xl my-5 w-full">
      Create An Account
    </h3>
    <form @submit.prevent="handleSubmit(state)" class="mx-4 sm:mx-0">
      <div
        class="flex flex-col md:flex-row items-center justify-between md:space-x-3"
      >
        <div class="flex flex-col my-4 w-full">
          <label for="">Firstname</label>
          <input
            :class="[v$.first_name.$error ? 'border-red-500 border-8' : '']"
            type="text"
            class="border p-2 rounded-md"
            v-model="state.first_name"
          />
          <transition name="fade" mode="in-out">
            <span
              class="text-red-500 font-semibold capitalize"
              v-if="v$.first_name.$error"
            >
              {{ v$.first_name.$errors[0].$message }}
            </span>
          </transition>
        </div>
        <div class="flex flex-col my-4 w-full">
          <label for="">Lastname</label>
          <input
            :class="[v$.last_name.$error ? 'border-red-500 border-8' : '']"
            type="text"
            class="border p-2 rounded-md"
            v-model="state.last_name"
          />
          <transition name="fade" mode="out-in">
            <span
              class="text-red-500 font-semibold capitalize"
              v-if="v$.first_name.$error"
            >
              {{ v$.first_name.$errors[0].$message }}
            </span>
          </transition>
        </div>
      </div>
      <div class="flex flex-col my-4">
        <label for="">PhoneNumber</label>
        <input
          :class="[v$.phone.$error ? 'border-red-500 border-8' : '']"
          type="number"
          class="border p-2 rounded-md"
          v-model="state.phone"
        />
        <transition name="fade" mode="out-in">
          <span
            class="text-red-500 font-semibold capitalize"
            v-if="v$.first_name.$error"
          >
            {{ v$.phone.$errors[0].$message }}
          </span>
        </transition>
      </div>
      <div class="flex flex-col my-4">
        <label for="">Email</label>
        <input
          :class="[v$.email.$error ? 'border-red-500 border-8' : '']"
          type="email"
          class="border p-2 rounded-md"
          v-model="state.email"
        />
        <transition name="fade" mode="out-in">
          <span
            class="text-red-500 font-semibold capitalize"
            v-if="v$.email.$error"
          >
            {{ v$.email.$errors[0].$message }}
          </span>
        </transition>
      </div>
      <div class="flex flex-col my-4">
        <label for="">Password</label>
        <input
          :class="[v$.password.$error ? 'border-red-500 border-8' : '']"
          type="password"
          class="border p-2 rounded-md"
          v-model="state.password"
        />
        <transition name="fade" mode="out-in">
          <span
            class="text-red-600 font-semibold capitalize"
            v-if="v$.email.$error"
          >
            {{ v$.password.$errors[0].$message }}
          </span>
        </transition>
      </div>
      <div class="flex flex-col my-4">
        <label for="">Confirm Password</label>
        <input
          :class="[v$.confirm_password.$error ? 'border-red-500 border-8' : '']"
          type="password"
          class="border p-2 rounded-md"
          v-model="state.confirm_password"
        />
        <transition name="fade" mode="out-in">
          <span
            class="text-red-500 font-semibold capitalize"
            v-if="v$.confirm_password.$error"
          >
            {{ v$.confirm_password.$errors[0].$message }}
          </span>
        </transition>
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
