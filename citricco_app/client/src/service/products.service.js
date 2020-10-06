import axios from "axios";

export default class ProductService {
  constructor() {
    this.api = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  }

  getAllProducts = () => this.api.get("/getAllProducts");
  getOneProduct = (id) => this.api.get(`/getOneProduct/${id}`);
  newProduct = (product) => this.api.post("/newProduct", product);
  editProduct = (id, product) => this.api.put(`/editProduct/${id}`, product);
}

