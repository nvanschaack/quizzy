import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    //checks whether token is expired or not
    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    //get token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }
    //save token in local storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }
    //delete token from local storage
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new AuthService();