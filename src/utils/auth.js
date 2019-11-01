// 从浏览器获取token
export function getToken(){
  return localStorage.getItem("token");
}
// 将token放到浏览器
export function setToken(token){
  return localStorage.setItem("token",token);
}
// 把浏览器的token删除
export function removeToken(){
  return localStorage.removeItem("token");
}