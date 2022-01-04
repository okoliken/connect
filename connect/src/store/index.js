import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LogUsersIn: async ({ commit }, logindata) => {
      const response = await axios.post(
        "https://tofumi-universal-api.herokuapp.com/api/v1/login",
        logindata
      );
      const loginData = await response.data;

      console.log(loginData);
      router.push("/", { params: { data: loginData.message } });
      sessionStorage.setItem("userToken", loginData.data.access_token);
    },
  },
  modules: {},
});
