import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        this.handleLogin = this.handleLogin.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleLogin() {
        var auth = AuthManager.getInstance();
        var self = this;

        new AuthService().login(this.state.userName, this.state.password).then(function (results) {
            auth.updateToken(results.bearerToken);
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
            <div className="login-root">
                <div className="cardContainer">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">ReactJS + AuthAPI with Sequelize</span>
                            <p>Welcome to your new ReactJS Application! Before we begin, please log in. If you don't have an account, please <Link to="/register">register here.</Link></p>
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
                            <a className="clickable-link" onClick={this.handleLogin}>Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;