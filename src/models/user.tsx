import { useState, useCallback, useEffect } from "react";
import { getToken, setToken, deleteToken } from "@/utils/helper"

export type userInfo = {
    id?: Number;
    token?: String;
    name?: String
};
export default () => {
    const [user, setUser] = useState<userInfo>(getToken())
    const getUser = () => {
        return user.token ? user : getToken()
        // return user
    }
    const updateUser = useCallback((userInfo: userInfo) => {
        setToken(JSON.stringify(userInfo))
        setUser(userInfo)
        // console.log("更新完后本地存储:", userInfo, getToken())
    }, [])

    const clearUser = useCallback(() => {
        setUser({})
        deleteToken()
    }, [])



    useEffect(() => {
        let userInfo: userInfo = getToken()
        // console.log("model初始化获取用户信息", userInfo)
        setUser(userInfo)
    }, [])

    return { user, clearUser, updateUser,getUser }
}