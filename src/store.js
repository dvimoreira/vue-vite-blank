import { createStore } from "vuex";
import jwtToken from "./security/jwt-token";
import storage from "./security/storage";

export default new createStore({
  state() {
    return {
      user: storage.getObject("user", null),
      authenticated: storage.get("authenticated", false),
      token: storage.get("token", null),
      refreshtoken: storage.get("refreshtoken", null),
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      storage.setObject("user", state.user);
    },
    setAuthenticated(state, authenticated) {
      storage.set("authenticated", authenticated);
      state.authenticated = authenticated;
    },
    setToken(state, token) {
      storage.set("token", token);
      state.token = token;
    },
    setRefreshToken(state, refreshtoken) {
      storage.set("refreshtoken", refreshtoken);
      state.refreshtoken = refreshtoken;
    },
  },
  actions: {
    login(context, params) {
      context.commit("setAuthenticated", true);
      context.commit("setToken", params.access_token);
      context.commit("setRefreshToken", params.refreshToken);
    },
    user(context, params) {
      context.commit("setUser", params);
    },
    logout(context) {
      context.state.user = null;
      context.state.authenticated = false;
      context.state.token = null;
      context.state.refreshtoken = null;
      storage.remove("user");
      storage.remove("authenticated");
      storage.remove("token");
      storage.remove("refreshtoken");
    },
    async refreshToken(context) {
      const response = await jwtToken.refreshToken();
      if (response && response.status) {
        context.commit("setToken", response.access_token);
      }
      return response;
    },
  },
});
