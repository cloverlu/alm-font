const userStore = {
  state: {
    bizType: ""
  },
  mutations: {
    SET_BIZTYPE: (state, bizType) => {
      state.bizType = bizType;
    }
  }
};

export default userStore;
