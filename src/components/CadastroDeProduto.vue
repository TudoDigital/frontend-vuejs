<template>
  <div class="container-md">
    <!-- Content here -->
    <h3>Cadastro de Produto</h3>

    <form>
      <div class="mb-3">
        <label for="produto" class="form-label">Produto</label>
        <input
          type="text"
          class="form-control"
          id="produto"
          placeholder="Insira o nome do produto"
        />
      </div>
      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição</label>
        <textarea
          class="form-control"
          id="descricao"
          rows="3"
          placeholder="Descrição do produto"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria</label>
        <select class="form-select" aria-label="Categoria de produto">
          <option selected>(Selecione uma categoria)</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="preco" class="form-label">Preço</label>
        <input
          type="number"
          class="form-control"
          id="preco"
          placeholder="R$"
        />
      </div>
      <div><input class="btn btn-primary" type="submit" value="Cadastrar"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CadastroDeProduto",
};
</script>
