import { createApp } from "vue";
import "./global.css";
import App from "./App.vue";
import pinia from "./plugins/pinia";
import { vuetify } from "./plugins/vuetify";

createApp(App).use(pinia).use(vuetify).mount("#app");
