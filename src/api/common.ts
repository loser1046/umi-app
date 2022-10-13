import { request } from "umi";

/** 获取IP地址 */
export async function getIp(
  params: {
    // query
    lang?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.IpResponse>('/json', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// import request1 from "@/utils/request"

// /** 获取IP地址 */
// export async function getIp1() {
//   return request1.get('/json1');
// }
