/**
 * Created by jsb-cpyy on 2017/7/21.
 */
/**
 * 格式化时间
 *
 * @param {String} str
 * @returns 格式化后的时间
 */
export function getCommonParam () {
  let param = {common : {
    userid:localStorage.getItem("userid"),
    username:localStorage.getItem("username"),
    token:localStorage.getItem("token")
  }} ;
  return param;
}
