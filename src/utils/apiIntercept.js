import Vue from "vue";
import Axios from "axios";
import router from "../router/index";

let apiIntercept = {};
apiIntercept.install = vue => {
  vue.prototype.$axios = Axios;
  // 拦截请求请求头加token
  Axios.interceptors.request.use(
    config => {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      if (localStorage.token) {
        config.headers["B-AUTH-TOKEN"] = localStorage.token;
        config.headers["Authorization"] = localStorage.token;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  // http response 拦截器
  Axios.interceptors.response.use(
    response => {
      if (response) {
        if (response.data.code) {
          switch (response.data.code) {
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
        switch (err.response.status) {
          case 401:
            router.replace({
              path: "/login"
            });
            break;
        }
      }
      return Promise.reject(err);
    }
  );
};
export default apiIntercept;
