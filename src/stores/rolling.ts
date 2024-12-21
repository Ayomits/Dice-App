import { RollingKey } from "@/utils/Constants";
import { defineStore } from "pinia";
import { toRaw } from "vue";

export interface RollingStoreState {
  duration: number;
  cubs: number; // кол-во кубиков (от них зависит максимальное значение )
  number: number; // выпавшее число
  attemps: number; // кол-во разов, что уже ролили
  max: number; // максимальное значение в сессии
}

const defaultState: RollingStoreState = {
  duration: 1,
  cubs: 1,
  number: 0,
  attemps: 0,
  max: 0,
};

export const getRollingHistory = () => {
  return Object.keys(localStorage).filter((key) => key.startsWith(RollingKey));
};

export const cleanRollingHistory = () => {
  const history = getRollingHistory();
  return history.map((key) => localStorage.removeItem(key));
};

export const useRollingStore = defineStore("rolling", {
  state: (): RollingStoreState => ({
    ...defaultState,
    attemps: getRollingHistory().length,
  }),

  getters: {
    getField: (state) => (field: keyof RollingStoreState) => state[field],
  },

  actions: {
    roll() {
      localStorage.setItem(
        `${RollingKey}_${Math.random().toFixed(15)}`,
        JSON.stringify(toRaw(this.$state))
      );
    },
    getRollingHistory() {
      return getRollingHistory();
    },
    cleanRollingHistory() {
      cleanRollingHistory();
    },
    cleanState() {
      Object.assign(this, defaultState);
    },

    increment(field: keyof RollingStoreState) {
      this[field] += 1;
    },

    decrement(field: keyof RollingStoreState) {
      this[field] -= 1;
    },

    set(field: keyof RollingStoreState, value: number) {
      this[field] = value;
    },

    getValue(field: keyof RollingStoreState) {
      return this[field];
    },
  },
});
