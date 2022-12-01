<template>
  <v-layout>
    <!-- <v-app-bar>1</v-app-bar> -->
    <Sidebar />
    <v-main style="height: 100vh">
      <nav></nav>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "NuevoTurno",
  components: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
.toolbar {
  color: #fff;
  background-color: #303030;
}

.flex {
  flex: 1 1 0;
}

.menu {
  margin: 0 -1rem;
}

/* .v-list-item-title {
  font-size: 20px !important;
} */

v-list-item {
  color: #fff;
}

.v-list-item__prepend i {
  color: #fff;
  /* background-color: #fff; */
}

.v-list-item-title {
  color: #fff;
}

.v-list-item-subtitle {
  color: #fff;
}
</style>
