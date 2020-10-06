import axios from "axios";

export default class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        });
    }

    signup = user => this.api.post("/signup", user);
    login = user => this.api.post("/login", user);
    logout = () => this.api.post("/logout");
    loggedin = () => this.api.get("/loggedin");
    getUser = user => this.api.get('/getUser', user)

}
