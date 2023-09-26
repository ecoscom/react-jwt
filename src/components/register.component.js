import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.lenght < 3 || value.lenght > 20) {
        return (
            <div className="alert alert--danger" role="alert">
                The passworf must be between 6 and 40 characters.
            </div>
        );
    }
}

const vpassword = value => {
    if (value.lenght < 6 || value.lenght > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
}

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = ths.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };

        onChangeUsername(e) {
            this.setState({
                username: e.target.value
            });
        }

        this.onChangeEmail(e) {
            this.setState({
                email: e.target.value
            });
        }

        this.onChangePassword(e) {
            this.setState({
                password: e.target.value
            });
        }

        handleRegister (e) {
            ////////////////
        }
    }
}

