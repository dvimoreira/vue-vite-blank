import { defineStore } from "pinia";
import storage from "../security/storage";

export const useStore = defineStore("storeId", {
  state() {
    return {
      user: storage.getObject("user", null),
      authenticated: storage.get("authenticated", false),
      token: storage.get("token", null),
      refreshtoken: storage.get("refreshtoken", null),
    };
  },
});
