import { defineConfig } from "umi";
import routes from "./routes";
export default defineConfig({
  npmClient: 'pnpm',
  history: {
    type: 'browser'
  },
  routes: routes,
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/request',
  ],
  model: {},
  initialState: {},
  // mock: false,
  mock:{},
  request: {
    dataField: ''
  }
});
