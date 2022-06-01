import axios from "axios";

const api = axios.create({
  baseURL: "https://bootcamp-gama-grupo-1.herokuapp.com",
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
});

export default api;