<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" alt="" width="50" height="50">
        </a>
        <h2>DYNAMICS</h2>
      </div>

      <v-spacer></v-spacer>

      <input class="form-control form-control-sm" 
        type="text" 
        placeholder="Pesquisar" 
        aria-label="pesquisar">
    </v-app-bar>

    <v-main>
      <CadastroDeProduto/>
    </v-main>
  </v-app>
</template>

<script>
import CadastroDeProduto from './components/CadastroDeProduto';

export default {
  name: 'App',

  components: {
    CadastroDeProduto,
  },

  data: () => ({
    //
  }),
};
</script>
