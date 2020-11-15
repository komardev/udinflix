import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: '',
    timeout: 10000,
    validateStatus: (status) => status >= 200 && status < 300,
});

class ApiRequest {
    static get(route) {
        return (payload) => this.request('GET', route, payload);
    }

    static request(method, route, payload = {}, t) {
        return new Promise((resolve, reject) => {
            const path = payload.path ? payload.path : '';

            const customUrl = payload.url ? payload.url : '';

            apiInstance
                .request({
                    url: customUrl.length > 0 ? customUrl : route + path,
                    method
                })
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

export default ApiRequest;