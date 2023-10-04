import axios from "axios";

const API_URL = "https://aguia.app.br:8443/api/rest/";

class AuthService {
    login(login, password, recaptchaAction, recaptchaToken) {
        return axios
            .post(API_URL + "token", 
                { 
                    
                        login,
                        password,
                        recaptchaAction, 
                        recaptchaToken
                },
                   {
                        'Content-Type' : 'application/json',
                    }
            )
            .then(response => {
                console.log(response)

                if (response.data.value) {
                    localStorage.setItem("user-ticket", JSON.stringify(response.data.value));
                }

                return response.data;
            })
            //.catch(r => {
            //    console.log(r.response);
            //});
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