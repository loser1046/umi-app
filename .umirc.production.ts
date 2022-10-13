import { defineConfig } from "umi";
export default defineConfig({
    define:{
        'process.env.UMI_ENV' : 'pro',
        'process.env.API_BASE_URL' : 'http://ip-api.com'
      }
});
