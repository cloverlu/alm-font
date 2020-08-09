<!--
 * @Descripttion:邮捷APP获取的用户信息
 * @Author: penglu
 * @Date: 2020-07-28 16:08:37
--> 

<script>
const param = JSON.parse(sessionStorage.getItem("userInfo"))
const userParam = JSON.parse(sessionStorage.getItem("userUserInfo"))
const token = JSON.parse(sessionStorage.getItem("x-token"))
// var JsonParamP = {};
// var params = {}
// var userParams = {}
// // alert(param)
// if(param){
// 	try{
// 			JsonParamP = JSON.parse(param)
// 			params={
// 				emplName:JsonParamP.userName,
// 				orgCode:JsonParamP.instId,
// 				orgName:JsonParamP.instName
// 			}
// 			userParams = {
// 				emplName:JsonParamP.userName,
// 				orgName:JsonParamP.instName
// 			}
// 	}catch(e){
// 			// debugger 看看报的什么错误, 正式环境注释掉alert
// 			// 不出意外的话，可能跟之前存储的脏数据有关系。
// 			alert(e.toString())
// 			JsonParamP = {};
// 	}
// }
export default {
  // JsonParamP, // 转成json的用户信息
  param,
  userParam,
  // params, // todoList 用到的传参
  token, // token
  // userParams  // userlist 用到的传参

}
</script>


