import axios from 'axios';


/*export const api = axios.create({
    baseURL : 'https://fakestoreapi.com/'
})*/
export const api = axios.create({
    baseURL : 'https://pokeapi.co/api/v2/'
})

//caso esteja consumindo uma api local
// export const localApi = axios.create({
//     baseURL : 'http://localhost:8080'
// })