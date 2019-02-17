import _ from 'underscore';
import jwt from 'jsonwebtoken';

import Config from '../config'

class AuthManager {
    static instance;
    static createInstance() {
        var object = new AuthManager();
        return object;
    }

    static getInstance() {
        if (!AuthManager.instance) {
            AuthManager.instance = AuthManager.createInstance();
        }
        return AuthManager.instance;
    }

    ////////////

    constructor() {
        this.isAuthenticated = false;
        this.bearerToken = undefined;
        let unencodedToken = jwt.sign({}, Config.authentication.publicKey, {
            issuer: 'client',
            audience: 'applicationname'
        });

        this.clientBearerToken = Buffer.from(unencodedToken).toString('base64');

        this.authChangedSubscribers = [];

        var stateCheck = localStorage.getItem("AuthManager::State");
        if (stateCheck) {
            var stateObject = JSON.parse(stateCheck);

            this.isAuthenticated = stateObject.isAuthenticated;
            this.bearerToken = stateObject.bearerToken;
        }
    }

    updateIsAuthenticated(value) {
        this.isAuthenticated = value;
        this.notifySubscribers();
    }

    updateToken(value) {
        this.bearerToken = value;
        this.isAuthenticated = true;
        this.notifySubscribers();
    }

    logOut() {
        this.bearerToken = undefined;
        this.isAuthenticated = undefined;
        localStorage.removeItem("AuthManager::State");
        this.notifySubscribers();
    }

    subscribe(delegate) {
        var subscriptionSearch = _.find(this.authChangedSubscribers, function (item) {
            return item === delegate;
        });

        if (subscriptionSearch === undefined) {
            this.authChangedSubscribers.push(delegate);
        }
    }

    unsubscribe(delegate) {
        this.authChangedSubscribers = _.reject(this.authChangedSubscribers, function (item) {
            return item === delegate;
        })
    }

    notifySubscribers() {
        this.authChangedSubscribers.forEach(function (item) {
            item();
        });

        localStorage.setItem("AuthManager::State", JSON.stringify({ bearerToken: this.bearerToken, isAuthenticated: this.isAuthenticated }));
    }
}

export default AuthManager;