import axios from 'axios';
export default class livrosApi {
    async buscarTodosOsLivros() {
        const response = await axios.get(`https://livrariamariale.herokuapp.com/livros`);
        return response.data;
    }

    async buscarLivro(id) {
        const response = await axios.get(`https://livrariamariale.herokuapp.com/livros${id}`);
        return response.data;
    }

    async adicionarLivros(livro) {
        const response = await axios.post(`https://livrariamariale.herokuapp.com/livros`, livro);
        return response.data;
    }

    async excluirLivro(id) {
        const response = await axios.delete(`https://livrariamariale.herokuapp.com/livros${id}`);
        return response.data;
    }

    async atualizarLivro(livro) {
        const response = await axios.patch(`https://livrariamariale.herokuapp.com/livros${livro.id}`, livro);
        return response.data;
    }

}