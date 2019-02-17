import Base from './clientServiceBase';

class AuthService extends Base {
    login(userName, password) {
        return this.jsonRequest('login', 'POST', { userName, password });
    }
    register(userName, password) {
        return this.jsonRequest('register', 'POST', { userName, password });
    }
};

export default AuthService
