import { GET_PRODUCT, CREATE_PRODUCT } from "./types";
import axios from "axios";

//fetch Data
export const getProducts = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/products")
    .then((res) => dispatch({ type: GET_PRODUCT, payload: res.data }))
    .catch((err) => console.log(err));
};

//add new Products
export const addProducts = (newProduct) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/products", newProduct)
    .then((res) => dispatch({ type: CREATE_PRODUCT, payload: res.data }))
    .catch((err) => console.log(err));
};
///update Products
export const updateProducts = (idproduct, updatedproduct) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/products/${idproduct}`, updatedproduct)
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err));
};
//delete Produits
export const deleteProducts = (idprod) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/products/${idprod}`)
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err));
};
