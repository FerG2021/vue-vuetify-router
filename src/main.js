import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";

// Componentes globales
import Sidebar from "./components/Sidebar.vue";

// Vuetify
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

createApp(App)
  .component("Sidebar", Sidebar)
  .use(router)
  .use(vuetify)
  .mount("#app");
