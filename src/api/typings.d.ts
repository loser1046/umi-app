// @ts-ignore
/* eslint-disable */

declare namespace API {
  type userInfo = {
    id: Number; 
    name: String, 
    token: String
  }
  type loginRequest = {
    phone ?: String
  }
  type loginResponse = {
    code?: number;
    status?: string;
    data:userInfo
  };
  type IpResponse = {
    status:String,
    country:String,
    regionName:String,
    city:String,
    query:String
  }
}
