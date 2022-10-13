import axios from 'axios';
import { history } from 'umi';


const service = axios.create({
//   baseURL: process.env.API_BASE_URL, // api 的 base_url
  timeout: 5000 // 请求超时时间
});

// console.log("axios中配置",service,process.env.API_BASE_URL)

service.interceptors.response.use(
  (response) => {
    // const res = response.data;
    // if (res.status && res.status === -101) {
    //   // 未登录或登录过期，跳转登录
    //   // history.push(`/login?jump_link=${encodeURIComponent(history.location.pathname)}`);
    //   history.push('/login');
    // }
    // if (res.status && res.status === -106) {
    //   // 未实名认证跳转认证
    //   history.push(`/user/basic`);
    // }
    // return response.data;
    return response;
  },
  (error) => {
    console.error(error);
  }
);

export default service;
