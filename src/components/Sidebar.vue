<template>
  <v-navigation-drawer expand-on-hover rail style="background-color: #303030">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Fernando Gonzalez"
        subtitle="fernandojaviergonzalez2018@gmail.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="fas fa-home"
        title="Home"
        value="home"
        style="color: #fff"
        @click="irHome()"
      ></v-list-item>
      <v-list-item
        prepend-icon="fas fa-user"
        title="Shared with me"
        value="shared"
        style="color: #fff"
        @click="irPanel()"
      ></v-list-item>
      <v-list-item
        prepend-icon="fas fa-star"
        title="Starred"
        value="starred"
        style="color: #fff"
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="fas fa-right-from-bracket"
          title="Salir"
          value="salir"
          style="color: #fff"
        ></v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    irHome() {
      this.$router.push("/");
    },

    irPanel() {
      this.$router.push("/panel");
    },
  },
};
</script>

<style>
</style>