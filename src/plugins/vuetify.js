// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import colors from 'vuetify/lib/util/colors';

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.green.darken1,
          secondary: colors.red.lighten4,
        }
      },
    },
  },
});
