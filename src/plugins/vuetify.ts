import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// @ts-ignore
import "vuetify/styles";

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          background: "#F0F0F0", // Цвет фона

          surface: "#252424", // Цвет для карточек и других элементов
          text: "#252424", // Цвет для текста
          lightText: "#ECECEC", // Текст внутри тёмных компонентов
        },
      },
    },
  },
});
