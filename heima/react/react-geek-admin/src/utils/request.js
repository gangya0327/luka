import axios from 'axios';
import { getToken, removeToken } from './token';
import router from '@/router';
import { message } from 'antd';

let redirecting = false;

const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
});

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401 && !redirecting) {
      redirecting = true;

      removeToken();
      message.error(error.response.data?.message ?? '登录已过期，请重新登录');

      setTimeout(() => {
        router.navigate('/login');
        window.location.reload();
      }, 1000);
    }
    return Promise.reject(error);
  },
);

export { request };
