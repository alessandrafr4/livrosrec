<script>
import AutoresApi from "@/api/autor.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autors: [],
    };
  },
  async created() {
    this.autors = await autoresApi.buscarTodosAsAutores();
  },

  methods: {
    async salvar() {
      if (this.autor.id) {
        await AutoresApi.atualizarAutor(this.autor);
      } else {
        await AutoresApi.adicionarAutor(this.autor);
      }
      this.autors = await autorsApi.buscarTodosAsAutores();
    },
    async excluir(autor) {
      await autorsApi.excluirAutor(autor.id);
      this.autors = await AutoresApi.buscarTodosAsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Autores</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Nome"
        v-model="autor.name"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        Nome
</thead>
        <tbody>
          <tr v-for="autor in autors" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.name }}</td>
            <td>
              <button @click="editar(autor)">Editar</button>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>