import { defineStore } from "pinia";
import type { RollingStoreState } from "./rolling";

export const useHistoryStore = defineStore("rolling-history", {
  state() {
    return {
      history: [] as RollingStoreState[],
    };
  },
  actions: {},
});
