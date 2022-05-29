import axios from "axios";

const api = axios.create({
  baseURL: "https://bootcamp-gama-grupo-1.herokuapp.com",
});

export default api;