import React, { Component } from 'react';
import AuthManager from '../../managers/authManager';
import AuthService from '../../services/authService';

import './index.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: ""
        }

        this.handleRegister = this.handleRegister.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleRegister() {
        var auth = AuthManager.getInstance();
        var self = this;

        new AuthService().register(this.state.userName, this.state.password).then(function () {
            self.props.history.push('/');
        }, function (error) {
            self.setState({ userName: "", password: "" });
            auth.logOut();
        });
    }

    handleFormChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="register-root">
                <div className="cardContainer">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Registration</span>
                            <p>Please enter a user name and passoword to register</p>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" placeholder="User Name" name="userName" onChange={this.handleFormChange} />
                                </div>
                                <div className="input-field col s12">
                                    <input type="password" placeholder="Password" name="password" onChange={this.handleFormChange} />
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <a className="clickable-link"  onClick={this.handleRegister}>Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;