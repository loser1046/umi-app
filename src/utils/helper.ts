export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export const getToken = (): any => {
  const token: string = localStorage.getItem('token') || '';
  let jsonToken
  try {
    jsonToken = JSON.parse(token)
  } catch (e) {
    jsonToken = {}
  }
  // console.log("获取localstorage:", jsonToken)
  return jsonToken;
};

export const getColorByTheme = (): any => {
  const theme = getTheme()
  if (theme == "light") {
    return {
      primaryColor: "#000000",  //默认文字颜色
    }
  } else {
    return {
      primaryColor: "#ffffff",
    }
  }

}

/**
 * 获取主题
 */
export const getTheme = (): string => {
  const theme: string = localStorage.getItem('theme') || 'light';
  console.log("获取主题色:", theme)
  return theme;
};

/**
 * 设置主题
 */
export function setTheme(theme: string) {
  document.querySelector("html")?.setAttribute("data-color-mode", theme);
  localStorage.setItem('theme', theme);
}

/**
 * 页面刷新时从localStorage加载主题
 */
 export function initTheme()  {
  const mode = getTheme()
  console.log("初始化主题设置",mode,document.querySelector("html"))
  mode && document.querySelector("html")?.setAttribute("data-color-mode", mode);
};





export const deleteToken = () => {
  localStorage.removeItem('token');
};

export const goLogin = (fullPath: String = "") => {
  localStorage.removeItem('token');
  if (fullPath) {
    window.location.href = `/login${fullPath}`;
  } else {
    window.location.href = '/login';
  }
};
