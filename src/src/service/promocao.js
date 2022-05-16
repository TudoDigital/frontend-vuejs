import { http } from "./config";

export default{

    listar:() => {
        return http.get('promocao')
    },

    salvar:(promocao) => {
        return http.post('promocao', promocao)
    }
}