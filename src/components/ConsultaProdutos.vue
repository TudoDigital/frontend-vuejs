<template>
<v-container>
  <v-card>
    <v-card-title>
      Produtos
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      item-key="id"
      :search="search"
      :items-per-page="5"
    >
      <template v-slot:[`item.preco`]="{ item }">
        <div>
          <vuetify-money
            v-model="item.preco"
            v-bind:options="options"
            v-bind:properties="properties"/>
        </div>
      </template>
    </v-data-table>
  </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

  export default {
    data () {
      return {
        search: '',
        calories: '',
        products: [],
        options: {
          locale: "pt-BR",
          prefix: "R$",
          suffix: "",
          precision: 2
        },
        properties: {
          rounded: true
        },
      }
    },
    mounted() {
    axios.get("http://localhost:8081/produto")
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        alert(error)
      })
  },
    computed: {
      headers () {
        return [
          { text: 'Id.', align: 'start', value: 'id', width: 80 },
          { text: 'Produto', value: 'nome' },
          { text: 'Categoria', value: 'categoria.descricao' },
          { text: 'Preço', value: 'preco', width: 180, align: 'center' },
        ] 
      },
    },
  }
</script>