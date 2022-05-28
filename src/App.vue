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
      <p>
          <router-link to="/">Consulta</router-link>
          <br>
          <router-link to="/produto">Cadastro de Produtos</router-link>
      </p>
      <router-view></router-view>
      <HttpAxios />
      <HttpFetch />
    </v-main>
  </v-app>
</template>

<script>
import HttpAxios from './components/HttpAxios'
import HttpFetch from './components/HttpFetch'

export default {
  name: 'App',

  components: {
    HttpAxios,
    HttpFetch
  },

  data: () => ({
    //
  }),
};
</script>
