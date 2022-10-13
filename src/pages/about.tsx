import { useRequest } from "umi";
import { useState, useEffect } from "react";
import { getIp } from "@/api/common";

const aboutPage = () => {
  const [ipInfos, setIpInfo] = useState<API.IpResponse>({
    status: "success",
    country: "中国",
    regionName: "上海",
    city: "上海",
    query: "127.0.0.1"
  })

  const ipInfo = useRequest(getIp, {
    manual: true,
    onSuccess(data, params) {
      setIpInfo(data as API.IpResponse)
      console.log("返回数据：", data)
    }
  });

  useEffect(() => {
    console.log("初始化")
    ipInfo.run({ lang: 'zh-CN' })
    // console.log("报错：",ipInfo.error)
    // console.log(ipInfo.data)
  }, [])

  async function reqTest() {
    console.log("发送请求测试")
    let info = await getIp({ lang: 'zh-CN' })
    console.log(info)

  }
  return (
    <div>
      <p>About页面</p>
      <p>IP获取状态:{ipInfos.status}</p>
      <p>国家:{ipInfos.country}</p>
      <p>城市:{ipInfos.city}</p>
      <p>IP地址:{ipInfos.query}</p>
      <button onClick={reqTest}>获取IP</button>
    </div>
  );
};

export default aboutPage;
