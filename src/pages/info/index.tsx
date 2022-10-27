import { useParams, history, useModel } from "umi"
import React from "react"
import styles from './index.less';
import { setTheme } from "@/utils/helper";
import { Button } from "antd";

const InfoPage: React.FC = () => {
  const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
  const params = useParams()
  // console.log("@@@", params)
  const { user } = useModel('user', (model) => ({
    user: model.user,
  }))
  const user_id: any = user.id

  function updateTheme(theme:string) {
    console.log("更改主题颜色")
    setTheme(theme)
    refresh()
  }

  return (
    < div className={styles.main}>
      <h1>Info</h1>
      <h2>获得的id为:{params.id}</h2>
      <p>用户信息:{user_id}</p>
      <Button type="text">Text Button</Button>
      <Button type="primary" onClick={()=>updateTheme('white')}>白色主题</Button>&nbsp;
      <Button onClick={()=>updateTheme('dark')}>黑色主题</Button>
    </div >
  )
}
export default InfoPage
