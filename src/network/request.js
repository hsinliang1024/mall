import axios from 'axios'

export function request(config) {
    //1.创建实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    //2.axios的拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })

    //2.2拦截响应
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    //发送真正网络请求
    return instance(config)
}

//codewhy代码
// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 5000
//     })
//     return instance(config)
// }