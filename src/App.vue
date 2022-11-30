<template>
  <v-card style="background-color: #242424">
    <!-- <v-toolbar dark prominent class="toolbar" style="border: 1px solid red">
      <v-btn>
        <v-icon icon="fas fa-bars" />
      </v-btn>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn> Button </v-btn>
    </v-toolbar> -->

    <v-layout style="background-color: #242424" class="menu">
      <v-navigation-drawer
        expand-on-hover
        rail
        style="background-color: #303030"
      >
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
          >
          </v-list-item>
          <v-list-item
            prepend-icon="fas fa-user"
            title="Shared with me"
            value="shared"
            style="color: #fff"
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

      <v-main style="height: 100vh">
        <nav></nav>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
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
</style>
