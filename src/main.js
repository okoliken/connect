import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import useValidate from "@vuelidate/core";

import router from "./router/index"
import './assets/tailwind.css'

createApp(App).use(router).use(useValidate).use(store).mount("#app");
