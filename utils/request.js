import {axiosWithToken} from './client';

const api = {
  loginUser: data => {
    return axiosWithToken.post('/api/users/login', data);
  },
  signupUser: data => {
    return axiosWithToken.post('/api/users/register', data);
  },
  listRestaurants: () => {
    return axiosWithToken.get('/api/v1/posts');
  },
  getRestaurant: payload => {
    return axiosWithToken.get(`/api/v1/posts/${payload}`);
  },
  getComment: payload => {
    return axiosWithToken.get(`/api/comments/all/${payload}`);
  },
  MakeComment: payload => {
    const {content, id} = payload;
    const payloadToBackend = {
      content,
    };
    return axiosWithToken.post(`/api/posts/comments/${id}`, payloadToBackend);
  },
};
export default api;
