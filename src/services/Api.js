import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: "http://192.168.0.112:8888/auth/users" // only test proporse
});

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    };

    return axiosAPI({
        method, url, data: request, headers
    }).then(res => {
        return Promise.resolve(res.data);
    }).catch(err => {
        return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest("get", url, resquest);


const deleteRequest = (url, request) => apiRequest("delete", url, request);

const post = (url, request) => apiRequest("post", url, request);

const put = (url, request) => apiRequest("put", url, request);

const patch = (url, request) => apiRequest("patch", url, request);

const API = {
    get, delete: deleteRequest, post, put, patch
};

export default API;