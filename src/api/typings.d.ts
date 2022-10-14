// @ts-ignore
/* eslint-disable */

declare namespace API {
  type userInfo = {
    id: Number; 
    name: string, 
    token: string
  }
  type loginRequest = {
    phone ?: string
  }
  type loginResponse = {
    code?: number;
    status?: string;
    data:userInfo
  };
  type IpResponse = {
    status:string,
    country:string,
    regionName:string,
    city:string,
    query:string
  }
}
