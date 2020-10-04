import axios from "axios";

export default class ProductService {
  constructor() {
    this.api = axios.create({ baseURL: "http//localhost:5000/api" });
  }

  getAllProducts = () => this.api.get("/getAllProducts");
  getOneProduct = (id) => this.api.get(`/getOneProduct/${id}`);
  newCoaster = (product) => this.api.post("/newProduct", product);
  getAllProducts = (is, product) => this.api.put(`/editProduct/${id}`, product);
}
