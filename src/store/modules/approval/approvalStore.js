const approvalStore = {
  // approval加载m3时，蓝色横条的初始位置
  state: {
    addmore: ""
  },
  mutations: {
    SET_ADDMORE: (state, addmore) => {
      state.addmore = addmore;
    }
  }
};
export default approvalStore;
