<template>
  <div style="margin-left: 3vh">
    <h1>Acerca de</h1>
    <v-btn
      prepend-icon="fas fa-plus"
      variant="tonal"
      @click="$refs.modalNuevo.abrir()"
    >
      Nuevo
    </v-btn>
  </div>

  <!-- modales -->
  <modal-nuevo ref="modalNuevo"></modal-nuevo>
</template>

<script>
import ModalNuevo from "./modales/nuevo.vue";

export default {
  name: "About",
  components: {
    ModalNuevo,
  },
  data() {
    return {};
  },

  methods: {
    nuevo() {},
  },
};
</script>