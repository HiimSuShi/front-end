import http from './axiosHttp';

const getAll = () => {
    return http.get("/news");
};
export default {
    getAll,
};