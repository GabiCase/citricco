import axios from "axios";

export default class AuthService {
    constructor() {
        this.api = axios.create({
<<<<<<< HEAD
            baseURL: process.env.REACT_APP_API_URL,
=======
            baseURL: "http://localhost:5000/api",
>>>>>>> d44e3c04278c5721a12df6be3e15b4de138f1f56
            withCredentials: true
        });
    }

    signup = user => this.api.post("/signup", user);
    login = user => this.api.post("/login", user);
    logout = () => this.api.post("/logout");
    loggedin = () => this.api.get("/loggedin");
    getUser = user => this.api.get('/getUser', user)

}
