import { Link, Outlet, useModel } from 'umi';
import styles from './index.less';
import { MetaMaskProvider } from 'metamask-react';
import { ConfigProvider } from 'antd';

export default function Layout() {
  // const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
  // let user_info: any = initialState?.userInfo
  const { clearUser, user } = useModel('user', (model) => ({
    clearUser: model.clearUser,
    user: model.user
  }))
  function logOut() {
    clearUser()
    // history.go(0)
  }
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/info/666">个人中心</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>当前登录用户:{user.name}</li>
        <button onClick={logOut}>退出登录</button>

      </ul>
      <ConfigProvider>
        <MetaMaskProvider>
          <Outlet />
        </MetaMaskProvider>
      </ConfigProvider>

    </div>
  );
}
