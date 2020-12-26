/*
 * @Descripttion:
 * @version:
 * @Author: BurNing
 * @Date: 2020-12-12 16:16:05
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-24 15:44:24
 */
import axios from "axios";

/* 封装请求函数 */
export function request(config) {
  //新建axios实例
  const instance = axios.create({
    //基本参数
    baseURL: 'http://81.69.248.117:50010',
    timeout: 10000
  });

  //请求拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    res => {return res.data},
    err => {console.log(err)}
  )
  
  //真正网络请求
  return instance(config)
}
