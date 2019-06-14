import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:8080'
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  console.log(error);
  if (error.response.status === 401) {
    router.push({ path: '/HelloWorld', query: { id: 123 }, params: { name: 'asd' } })
  }
  return Promise.reject(error);
});

export default function() {
  console.log('axios init...')
}