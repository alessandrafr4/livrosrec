import axios from 'axios';
 export default class EditorasApi {
    async buscarTodosAsEditoras (){
        const response =await axios.get ('https://livrariamariale.herokuapp.com/editoras');
        return response.data;
    }
    async buscarEditora(id){
        const response =await axios.get('https://livrariamariale.herokuapp.com/editoras/${id}');
        return response.data;
    }
    async adicionarEditora(editora){
        const response =await axios.post('https://livrariamariale.herokuapp.com/editoras', editora);
        return response.data;
    }
    async excluirEditora(id){
        const response =await axios.delet('https://livrariamariale.herokuapp.com/editoras/${id}');
        return response.data;
    }
    async atualizarEditora(id){
        const response =await axios.patch('https://livrariamariale.herokuapp.com/editoras/${editora.id}' ,editora,);
        return response.data;
    }

}



