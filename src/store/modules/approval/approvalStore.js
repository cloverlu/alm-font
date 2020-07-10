const approvalStore = {
  state: sessionStorage.getItem("store")
    ? JSON.parse(sessionStorage.getItem("store")).approvalStore
    : {
        // approval加载m3时，蓝色横条的初始位置
        addmore: "",
        // 点击更多出现的详情
        approveDetail: {},
        // 下一阶段处理人
        handleParams: {}
      },

  mutations: {
    SET_ADDMORE: (state, addmore) => {
      state.addmore = addmore;
    },
    SET_APPROVEDETAIL: (state, approveDetail) => {
      state.approveDetail = approveDetail;
    },
    SET_HANDLEPARAMS: (state, handleParams) => {
      state.handleParams = handleParams;
    }
  }
};
export default approvalStore;
