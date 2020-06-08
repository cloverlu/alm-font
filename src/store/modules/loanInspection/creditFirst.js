const creditFirst = {
  state: {
    definite1: {},
    definite2: {},
    definite3: {}
  },
  mutations: {
    SET_DEFINITE1: (state, params) => {
      state.definite1 = params;
    },
    SET_DEFINITE2: (state, params) => {
      state.definite2 = params;
    },
    SET_DEFINITE3: (state, params) => {
      state.definite3 = params;
    }
  }
};

export default creditFirst;
