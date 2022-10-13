// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function login(
  params: API.loginRequest,
  options?: { [key: string]: any },
) {
  return request<API.loginResponse>('/api/login', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
