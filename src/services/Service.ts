import axios from "axios";

export const api = axios.create({
    baseURL: 'https://ecommerce-lccu.onrender.com/' /* conexão com a api */
});

/* LOGIN */
export const login = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    
    setDado(resposta.data.token); 

}

/* CADASTRO */
export const cadastroUsuario = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    setDado(resposta.data); 
}







