import { Navigate,Outlet,history,useModel } from "umi"
import { goLogin,getToken } from "@/utils/helper"
import { useEffect } from "react"

export default (props:any)=> {
    // const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
    // if(!loading){
    //     console.log("全局初始状态用户信息:",initialState?.userInfo,loading)
    // }

    const {user} = useModel('user',(model)=>({
        user:model.getUser()
    }))
    // const {user} = useModel('user',(model)=>({
    //     user:model.user
    // }))
    // console.log("中间键里获取到的用户信息:",user,getToken(),props)
    // debugger
    const isLogin = user.token ? true : false
    // let navigate = useNavigate()
    // console.log("@@@@@",history)

    useEffect(()=>{
        // console.log("中间键初始化")
    },[])

    const fullpath = history.location.pathname+history.location.search
    if(isLogin){
        return (
            <Outlet />
          )
    }else{
        goLogin(`?path=`+encodeURIComponent(fullpath))
        // return (
        //     <Navigate to={`/login?path=`+encodeURIComponent(fullpath)}/>
        //   )
    }

}