import { useState, useCallback, useEffect } from "react";
import { getToken, setToken, deleteToken } from "@/utils/helper"

export type userInfo = {
    id?: Number;
    token?: string;
    name?: string
};
export default () => {
    console.log("开始执行")
    const [user, setUser] = useState<userInfo>(getToken())
    // let user:userInfo = getToken()

    // function setUser(newUser:userInfo){
        // user = newUser
    // }
    const getUser = () => {
        return user.token ? user : getToken()
        // return user
    }
    const updateUser = useCallback((userInfo: userInfo) => {
        // console.log("更新前user", user)
        // console.log("开始更新user", userInfo)
        setToken(JSON.stringify(userInfo))
        setUser(userInfo)
        // console.log("更新后user", user)
        // debugger
    }, [])

    const clearUser = useCallback(() => {
        setUser({})
        deleteToken()
    }, [])



    useEffect(() => {
        let userInfo: userInfo = getToken()
        console.log("model初始化获取用户信息", userInfo)
        setUser(userInfo)
    }, [])

    return { user, clearUser, updateUser, getUser }
}