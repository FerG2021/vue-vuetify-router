<template>
  <div class="contenedor">
    <v-card
      title="Ventas"
      text="Ejemplo de card"
      variant="tonal"
      class="card-home"
      prepend-icon="fas fa-home"
    ></v-card>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },
};
</script>

<style>
.v-card-title {
  color: #fff !important;
}

.contenedor {
  margin: 10px;
}

.card-home .v-card-item .v-card-item__prepend .v-avatar i {
  color: #fff !important;
}
</style>