const userStore = {
  state: sessionStorage.getItem("store")
    ? JSON.parse(sessionStorage.getItem("store")).userStore
    : {
        userBizType: "",
        userBizId: [],
        userForBizDetail: {}
      },
  mutations: {
    SET_USERBIZTYPE: (state, userBizType) => {
      state.userBizType = userBizType;
    },
    SET_USERBIZID: (state, userBizId) => {
      state.userBizId = userBizId;
    },
    SET_USERFORBIZDETAIL: (state, userForBizDetail) => {
      state.userForBizDetail = userForBizDetail;
    }
  }
};

export default userStore;
