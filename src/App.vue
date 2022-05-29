<template>
  <v-app>
    <v-navigation-drawer app dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mt-2">
            <v-row>
              <v-col md=4>
                <img src="./assets/logo.png" class="" width="50" height="50">
              </v-col>
              <v-col class="mt-4 ml-0 pl-0">
                DYNAMICS
              </v-col>
            </v-row>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Consulta</v-list-item-title>
          </v-list-item>

          <v-list-item to="/produto">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastro de Produtos</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <HttpAxios />
        <HttpFetch />
      </v-container>
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
      group: null,
  }),
};
</script>