import axios from 'axios'

axios.defaults.headers.common['header1'] = 'Access-Control-Allow-Origin: *'

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

export const http = axios.create({
    baseURL: 'http://localhost:8080'
})

{
  "nome": "Beliche",
  "preco": 900,
  "idcategoria": 2
} 