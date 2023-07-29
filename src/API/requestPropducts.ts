import axios from "axios";

// type Product = {
//     id: number;
//     title: string;
//     price: number;
//     category: string;
//   }

const API = axios.create({baseURL: 'https://fakestoreapi.com'});

export const getProducts = () => API.get(`/products`);
export const getProduct = (id: number) => API.get(`/products/${id}`);
export const deleteProduct = (id: number) => API.delete(`/products/${id}`);