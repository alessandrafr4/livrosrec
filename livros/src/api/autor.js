import axios from 'axios';
 export default class autoresApi {
    async buscarTodosAsAutores (){
        const response =await axios.get ('https://livrariamariale.herokuapp.com/autors');
        return response.data;
    }
    async buscarAutores(id){
        const response =await axios.get('https://livrariamariale.herokuapp.com/autors/${id}');
        return response.data;
    }
    async adicionarAutores(autores){
        const response =await axios.post('https://livrariamariale.herokuapp.com/autors', autores);
        return response.data;
    }
    async excluirAutores(id){
        const response =await axios.delet('https://livrariamariale.herokuapp.com/autors/${id}');
        return response.data;
    }
    async atualizarAutores(id){
        const response =await axios.patch('https://livrariamariale.herokuapp.com/autors/${autores.id}' ,autores,);
        return response.data;
    }

}