<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-top-transition"
    persistent
    style="width: 70%"
    class="card-modal"
  >
    <v-card class="card-modal">
      <v-toolbar color="primary" title="Nuevo usuario"></v-toolbar>

      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="NOMBRE"
                required
                class="item-form"
              ></v-text-field>
              <!-- prepend-inner-icon="fas fa-home" -->
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="APELLIDO"
                required
                class="item-form"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-MAIL"
                required
                class="item-form"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="error" @click="cerrar()"> Cerrar </v-btn>
        <v-btn variant="flat" color="success" @click="cerrarSuccess()">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar v-model="snackbarError" :timeout="timeout" color="error">
    <p style="text-align: center">{{ snackbarTextoError }}</p>
  </v-snackbar>

  <v-snackbar v-model="snackbarSuccess" :timeout="timeout" color="success">
    <p style="text-align: center">{{ snackbarTextoSuccess }}</p>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      snackbarError: false,
      snackbarTextoError: null,
      snackbarSuccess: false,
      snackbarTextoSuccess: null,
      isActive: true,

      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) => v.length <= 10 || "El nombre debe tener menos de 10 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "El e-mail es requerido",
        (v) => /.+@.+/.test(v) || "El e-mail debe ser válido",
      ],
    };
  },

  methods: {
    abrir() {
      this.dialog = true;
    },

    cerrar() {
      this.snackbarTextoError = "Modal cerrado con éxito";
      this.snackbarError = true;
      this.dialog = false;
    },

    cerrarSuccess() {
      this.snackbarTextoSuccess = "Modal cerrado con éxito";
      this.snackbarSuccess = true;
      this.dialog = false;
    },
  },
};
</script>

<style>
.card-modal .v-card-text {
  background-color: #242424;
}

.card-modal .v-card-actions {
  background-color: #242424;
}

.v-form {
  background-color: #242424;
}

.v-field__field {
  background-color: #fff;
}

.v-input__details {
  background-color: #fff;
}

.item-form .v-input__prepend {
  background-color: #fff;
}

.v-input {
  background-color: #fff;
}
</style>