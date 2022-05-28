<template>
  <v-app>
    <MenuDynamics/>
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
import MenuDynamics from './components/MenuDynamics'
import HttpAxios from './components/HttpAxios'
import HttpFetch from './components/HttpFetch'

export default {
  name: 'App',

  components: {
    MenuDynamics,
    HttpAxios,
    HttpFetch
  },

  data: () => ({
    //
  }),
};
</script>
