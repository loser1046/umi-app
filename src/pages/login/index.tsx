import { Link, history, useSearchParams, useModel, useRequest } from "umi"
import { login } from "@/api/user"
import React from "react"
const Login: React.FC = (props: any) => {
    const [fullpath, setFullPath] = useSearchParams()
    const { user, updateUser } = useModel('user')

    const loginRequest = useRequest(login, {
        manual: true,
        // onSuccess(data, params) {
        //     console.log("登录结果", data)
        //     updateUser(data as API.userInfo)
        //     let redirectUrl = fullpath.get('path')
        //     console.log("要跳回的路径", redirectUrl)
        //     history.replace(redirectUrl ? redirectUrl : '/')
        // }
    })

    async function toLogin() {
        const res = await loginRequest.run({ phone: "120119111" })
        console.log("登录结果", res)
        updateUser(res as API.userInfo)
        let redirectUrl = fullpath.get('path')
        console.log("要跳回的路径", redirectUrl)
        console.log("登录跳转前model中的用户信息:",user)
        debugger
        history.replace(redirectUrl ? redirectUrl : '/')
    }
    return (
        <div>
            <h1>Login</h1>
            {/* <Link to="/"> */}
            <button onClick={toLogin}>登录</button>
            {/* </Link> */}
        </div>
    )
}

export default Login