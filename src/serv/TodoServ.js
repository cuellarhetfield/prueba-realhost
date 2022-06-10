import axios from "axios";

export default class TodoServ{
    constructor(){
        this.url = "https://jsonplaceholder.typicode.com/todos";
    }

    async list(){
        try{
            return await axios.get(this.url); 
        }catch(error){
            throw error;
        }
    }
}