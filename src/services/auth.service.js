import axios from "axios";

const API_URL = "http://aguia.app.br:8080/api/rest/";

class AuthService {
    login(login, password, recaptchaAction, recaptchaToken) {
        return axios
            .post(API_URL + "token", {
                login,
                password,
                recaptchaAction, 
                recaptchaToken 

            })
            .then(response => {
                if (response.data.acessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();