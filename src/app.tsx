// 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等
import type { RequestConfig } from 'umi';
import { getToken, getTheme,getColorByTheme,initTheme } from './utils/helper';
import React from 'react';
import { ConfigProvider } from 'antd';

console.log("全局的配置文件")

//@ts-ignore  路由跳转
export function onRouteChange({ location, clientRoutes, action, basename }) {
    // console.log("路由跳转:", location, clientRoutes, action, basename)
}

// export function rootContainer(container: any) {
//     return React.createElement(ConfigProvider, null, container);
// }

//这里可以定义全局的初始状态 Model (
//其实就是利用model去实现了相关功能,如果单独维护有一份全局用户状态数据,这里定义意义不大
export async function getInitialState() {
    // console.log("全局数据初始化")
    // const theme = getTheme()
    // const colorByTheme = getColorByTheme()
    // console.log("初始化的主题颜色为:",theme)
    // console.log("该主题的默认配色方案:",colorByTheme)
    // ConfigProvider.config({
        // theme: colorByTheme
        // theme: {
        //     // primaryColor: '#25b864',// 全局主色
        //     primaryColor: getTheme(),// 全局主色
        // },
    // });
    initTheme()
    return {
        userInfo: getToken()
    }
}

const header: any = {
    'os': 'web'
}
const token = ""
if (token) {
    header.Authorization = token
}

export const request: RequestConfig = {
    // baseURL: process.env.API_BASE_URL, // api 的 base_url
    timeout: 5000, // 请求超时时间
    // 自定义请求头
    headers: header,
    // other axios options you want
    errorConfig: {
        errorHandler() {
        },
        errorThrower() {
        }
    },
    requestInterceptors: [
        [(url, options) => {
            return { url, options }
        },
        (error: any) => {
            return Promise.reject(error)
        }],
    ],
    responseInterceptors: [
        [(response) => {
            return response
        },
        (error: any) => {
            return Promise.reject(error)
        }],
    ]
};


