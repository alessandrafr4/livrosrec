import axios from 'axios';
 export default class CategoriasApi {
    async buscarTodosAsCategorias(){
        const response =await axios.get ('https://livrariamariale.herokuapp.com/categorias');
        return response.data;
    }
    async buscarCategoria(id){
        const response =await axios.get('https://livrariamariale.herokuapp.com/categorias/${id}');
        return response.data;
    }
    async adicionarCategoria(categoria){
        const response =await axios.post('https://livrariamariale.herokuapp.com/categorias', categoria);
        return response.data;
    }
    async excluirCategoria(id){
        const response =await axios.delet('https://livrariamariale.herokuapp.com/categorias/${id}');
        return response.data;
    }
    async atualizarCategoria(id){
        const response =await axios.patch('https://livrariamariale.herokuapp.com/categorias/${categorias.id}' ,categoria,);
        return response.data;
    }

}