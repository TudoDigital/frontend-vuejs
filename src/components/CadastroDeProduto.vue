<template>
  <div class="container">
    <h1>Cadastro de Produto</h1>
    <hr />
    <form @submit.prevent="submitForm" autocomplete="off">
      <div class="form-group">
        <label for="produto">Produto:</label>
        <input class="form-control" v-model="produto.nome" id="produto">
        <p v-if="!nomeEstaValido" class="error-message">Produto precisa ter um nome.</p>
      </div>
      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <textarea class="form-control" v-model="produto.descricao" id="descricao"></textarea>
      </div>
      <div class="form-group">
        <label for="categoria">Categoria:</label>
        <input class="form-control" v-model="produto.categoria" id="categoria">
      </div>
      <div class="form-group">
        <label for="preco">Preço:</label>
        <input class="form-control" v-model.number="produto.preco" id="preco">
        <p v-if="!precoEstaValido" class="error-message">Por favor, insira apenas números.</p>
      </div>
      <div>
        <button :disabled="!produtoEstaValido" class="btn btn-primary" type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produto: {
        nome: '',
        descricao: '',
        categoria: '',
        preco: null
      }
    }
  },
  methods: {
    submitForm() {
      if (this.produtoEstaValido) {
        console.log("Cadastrado", this.produto)
      } else {
        console.log("Não cadastrado", this.produto)
      }
    }
  },
  computed: {
    nomeEstaValido() {
      return !!this.produto.nome
    },
    categoriaEstaValida() {
      return !!this.produto.categoria
    },
    precoEstaValido() {
      return typeof this.produto.preco === 'number'
    },
    produtoEstaValido() {
      return this.nomeEstaValido && this.precoEstaValido && this.categoriaEstaValida
    }
  }
}
</script>