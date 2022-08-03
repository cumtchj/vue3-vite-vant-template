/**
 * @ Author: Haojun.Cao
 * @ Create Time: 2022-08-01 14:38:16
 * @ Description: axios 请求封装
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Toast } from 'vant';

/**
 * 返回数据类型
 */
export interface ApiResponseInter {
  code: string;
  data?: any;
  message?: string;
}

// 白名单，对白名单接口可以做特殊预处理
const WHITE_LIST: string[] = [];

const request = axios.create({
  baseURL: '/',
  timeout: 3e5,
  headers: {}
});

// 请求前预处理
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: 发起请求前对请求参数进行预处理
    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// 请求数据返回后数据预处理
request.interceptors.response.use(
  (result: AxiosResponse) => {
    // TODO: 对返回数据进行处理
    const data: ApiResponseInter = result.data;
    if (data.code !== 'success') {
      // 请求业务失败
      Toast({
        message: data.message
      });
    }
    return data;
  },
  (error: any) => {
    console.log(error);
    Toast({
      message: '请求失败'
    });
    return Promise.reject(error);
  }
);

export default request;
