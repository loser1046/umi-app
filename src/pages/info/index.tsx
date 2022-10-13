import { useParams, history, useModel } from "umi"
import React from "react"

const InfoPage: React.FC = () => {
  const params = useParams()
  // console.log("@@@", params)
  const { user } = useModel('user', (model) => ({
    user: model.user,
  }))
  const user_id: any = user.id

  return (
    < div >
      <h1>Info</h1>
      <h2>获得的id为:{params.id}</h2>
      <p>用户信息:{user_id}</p>
    </div >
  )
}
export default InfoPage
