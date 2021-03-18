import cookie from 'js-cookie';

// 设置cookie
export function setCookie(info) {
  // 将对象转化为键值对形式，转化之后是一个二维数组
  const arr = Object.entries(info);
  //   我们使用eslint代码规范化插件中有一个插件airbnb不允许使用++
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i][0], arr[i][1]);
    cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}

// 得到cookie
export function getCookie() {
  return {
    username: cookie.get('username'),
    appkey: cookie.get('appkey'),
    email: cookie.get('email'),
    role: cookie.get('role'),
  };
}

// 删除cookie
export function removeCookie() {
  cookie.remove('username');
  cookie.remove('appkey');
  cookie.remove('email');
  cookie.remove('role');
  return true;
}
