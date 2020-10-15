import axios from "axios";

export default class fileService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://servercitricco.herokuapp.com/api/files",
      withCredentials: true,
    });
  }

  uploadImage = (imageForm) => this.api.post("/upload", imageForm);
}
