<template>
  <v-app>
    
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
    
    
  </v-app>
</template>

<script>

import Promocao from '@/src/service/promocao';
export default {
 
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