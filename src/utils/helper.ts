export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export const getToken = ():any => {
  const token :string = localStorage.getItem('token') || '';
  let jsonToken
  try {
    jsonToken = JSON.parse(token)
  } catch (e) {
    jsonToken = {}
  }
  console.log("获取localstorage:", jsonToken)
  return jsonToken;
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
