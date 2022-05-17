<template>
  <v-app>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://raw.githubusercontent.com/TudoDigital/Dynamics/develop/Docs/LOGO/Dynamics_DESIGN.png"
            alt=""
            width="50"
            height="50"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Produtos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promoções</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Categorias</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="py-4 container">
      <legend>Cadastro de promoções</legend>
      <form @submit.prevent="salvar" class="row g-3 d-flex">
        <div class="row">
          <div class="col-md-6">
            <label for="setDescricao" class="form-label">Descrição</label>
            <input
              v-model="promocao.Descricao"
              type="text"
              class="form-control"
              id="setDescricao"
              placeholder="Insira o nome da promoção"
            />
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-md-1">
            <label for="setDesconto" class="form-label">Desconto</label>
            <input
              v-model="promocao.Desconto"
              type="number"
              class="form-control"
              id="setDesconto"
            />
          </div>

          <div class="col-md-2">
            <label for="setQtdeMin" class="form-label">Qtde Mínima</label>
            <input
              v-model="promocao.QtdeMin"
              type="number"
              class="form-control"
              id="setQtdeMin"
            />
          </div>
          <div class="col-md-2">
            <label for="setQtdeBonus" class="form-label">Qtde Bônus</label>
            <input
              v-model="promocao.QtdeBonus"
              type="number"
              class="form-control"
              id="setQtdeBonus"
            />
          </div>
        </div>

        <div class="row pt-2">
          <div class="col-md-3">
            <label for="setDataInicio" class="form-label">Data Inicial</label>
            <input
              v-model="promocao.datainicio"
              type="date"
              class="form-control"
              id="setDataInicio"
            />
          </div>
          <div class="col-md-3">
            <label for="setDataFim" class="form-label">Data Final</label>
            <input
              v-model="promocao.datafim"
              type="date"
              class="form-control"
              id="setDataFim"
            />
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-md-3">
            <label for="setQtdeBonus" class="form-label"
              >Tipo de Promoção</label
            >
            <select
              v-model="promocao.idTipoPromocao"
              name=""
              id="comboTipoPromocao"
              class="form-select"
            >
              <option selected>Selecione...</option>
              <option>Desconto</option>
              <option>Quantidade Mínima</option>
              <option>Quantidade Bônus</option>
            </select>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12">
            <div class="form-check">
              <input
                v-model="promocao.Ativo"
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label class="form-check-label" for="gridCheck"> Ativo </label>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Cadastrar</button>
          </div>
        </div>
      </form>
      <div class="pt-4">
        <table class="table table-striped table-bordered">
          <caption>Promoção</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Descrição</th>
              <th>Desconto</th>
              <th>Qtde Mínima</th>
              <th>Qtde Bônus</th>
              <th>Data Inicial</th>
              <th>Data Final</th>
              <th>Tipo de Promoção</th>
              <th>Ativo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="promocao of promocoes" :key="promocao.id">
              <td>{{ promocao.Id }}</td>
              <td>{{ promocao.Descricao }}</td>
              <td>{{ promocao.Desconto }}</td>
              <td>{{ promocao.QtdeMin }}</td>
              <td>{{ promocao.QtdeBonus }}</td>
              <td>{{ promocao.datainicio }}</td>
              <td>{{ promocao.datafim }}</td>
              <td>{{ promocao.descTipoPromocao }}</td>
              <td>{{ promocao.Ativo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="./assets/true.png" class="rounded me-2" alt="..." />
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
    <v-main>
      <CadastroDeProduto />
      <HttpAxios />
      <HttpFetch />
      <ConsultaProdutos />
    </v-main>
  </v-app>
</template>

<script>
import CadastroDeProduto from "./components/CadastroDeProduto";
import HttpAxios from "./components/HttpAxios";
import HttpFetch from "./components/HttpFetch";
import ConsultaProdutos from "./components/ConsultaProdutos";
import Promocao from './service/promocao';

export default {
  name: "App",

  components: {
    CadastroDeProduto,
    ConsultaProdutos,
    HttpAxios,
    HttpFetch,
  },

  data() {
    return {
      promocao: {
        Descricao: "",
        Desconto: 0,
        QtdeMin: 0,
        QtdeBonus: 0,
        datainicio: "",
        datafim: "",
        idTipoPromocao: 0,
        Ativo: true,
      },
      promocoes: [],
    };
  },

  mounted() {
    Promocao.listar().then((resposta) => {
      console.log(resposta.data);
      this.promocoes = resposta.data;
    });
  },

  methods: {
    salvar() {
      Promocao.salvar(this.promocao).then((resposta) => {
        console.log(resposta);
        alert();
      });
    },
  },
};
</script>
