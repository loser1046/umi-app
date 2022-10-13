import { defineConfig } from "umi";
export default defineConfig({
  // https: {
  //   key: './localhost-key.pem',
  //   cert: './localhost.pem',
  //   hosts:['127.0.0.1', 'localhost']
  // },
  define:{
    'process.env.UMI_ENV' : 'dev',
    'process.env.API_BASE_URL' : 'http://ip-api.com'
  }
});
