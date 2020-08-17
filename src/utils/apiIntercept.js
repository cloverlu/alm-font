import Vue from "vue";
import Axios from "axios";
import router from "../router/index";
import { Indicator, Toast } from "mint-ui";

// let instance = Axios.create({
//   transformRequest: [
//     function transformRequest(data, headers) {
//       normalizeHeaderName(headers, "Content-Type");
//       if (
//         utils.isFormData(data) ||
//         utils.isArrayBuffer(data) ||
//         utils.isBuffer(data) ||
//         utils.isStream(data) ||
//         utils.isFile(data) ||
//         utils.isBlob(data)
//       ) {
//         return data;
//       }
//       if (utils.isArrayBufferView(data)) {
//         return data.buffer;
//       }
//       if (utils.isURLSearchParams(data)) {
//         setContentTypeIfUnset(
//           headers,
//           "application/x-www-form-urlencoded;charset=utf-8"
//         );
//         return data.toString();
//       }
//       /*改了这里*/
//       if (utils.isObject(data)) {
//         setContentTypeIfUnset(
//           headers,
//           "application/x-www-form-urlencoded;charset=utf-8"
//         );
//         let _data = Object.keys(data);
//         return encodeURI(_data.map(name => `${name}=${data[name]}`).join("&"));
//       }
//       return data;
//     }
//   ]
// });

let apiIntercept = {};
apiIntercept.install = vue => {
  vue.prototype.$axios = Axios;
  // 拦截请求请求头加token
  // Axios.interceptors.request.use(
  //   config => {
  //     // 判断是否存在token，如果存在的话，则每个http header都加上token
  //     if (localStorage.token) {
  //       config.headers["B-AUTH-TOKEN"] = localStorage.token;
  //       config.headers["Authorization"] = localStorage.token;
  //     }
  //     return config;
  //   },
  //   err => {
  //     return Promise.reject(err);
  //   }
  // );
  // http response 拦截器

  Axios.interceptors.response.use(
    response => {
      if (response) {
        if (response.status) {
          switch (response.status) {
						case 200:
							if(response.data.returnCode !== "200000"){
								Indicator.close();
								Toast({
									message: response.data.returnMsg,
									iconClass: 'iconfont iconcha-01',
									duration: 5000,
								})
							}
							break;
            case 401:
              // 返回 401 清除token信息并跳转到登录页面
              localStorage.removeItem("token");
              localStorage.removeItem("userInfo");
              router.replace({
                path: "/login"
              });
              // response.data.message = '登录信息失效，请重新登录'
              break;
            default:
            // alert(response.data.message)
          }
        }
      }
      return response; // 返回接口返回的错误信息
    },
    err => {
      if (err && err.response) {
        Indicator.close();
        switch (err.response.status) {
          case 401:
            router.replace({
              path: "/login"
            });
            break;
          case 500:
            Toast({ message: "网络有问题，请联系管理员", duration: 5000 });
            break;
          case 404:
            Toast({ message: "当前数据不存在", duration: 5000 });
						break;
					case 400:
						Toast({ message: err.response.data.message, duration: 5000 });
						break;
          case 405:
            Toast({ message: err.response.data.message, duration: 5000 });
        }
      }
      return Promise.reject(err);
    }
  );
};
export default apiIntercept;
