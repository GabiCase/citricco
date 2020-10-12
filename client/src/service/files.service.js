import axios from "axios";

export default class fileService {
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:5000/api/files",
            withCredentials: true
        });
    }
    // prueba = () => {
    //     console.log('HOLAAAAA')
    // }

    uploadImage = imageForm => this.api.post('/upload', imageForm);
}
