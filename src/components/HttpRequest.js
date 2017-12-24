import axios from 'axios';

//const baseUrl = 'http://localhost:8000/api/v1';
const baseUrl = 'http://www.xenren.co/api/v1';

export default {
    /** AUTH */

    login(email, password) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        return axios.post(baseUrl + '/auth/login', formData);
    },

    register(name, email, password) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        return axios.post(baseUrl + '/auth/register', formData);
    },

    verifyCode(code, email) {
        const formData = new FormData();
        formData.append('code', code);
        formData.append('email', email);
        return axios.post(baseUrl + '/auth/verify-code', formData);
    },

    forgotPassword(email) {
        const formData = new FormData();
        formData.append('email', email);
        return axios.post(baseUrl + '/auth/forgot-password', formData);
    },
};