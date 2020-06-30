const creditFirst = {
  state: sessionStorage.getItem("store")
    ? JSON.parse(sessionStorage.getItem("store")).creditFirst
    : {
        m1Definite1: {},
        m1Definite2: {},
        m1Definite16: {},
        m1Definite3: {}
      },
  // state: {
  //   m1Definite1: {},
  //   m1Definite2: {},
  //   m1Definite16: {},
  //   m1Definite3: {}
  // },
  mutations: {
    SET_M1DEFINITE1: (state, params) => {
      state.m1Definite1 = params;
    },
    SET_M1DEFINITE2: (state, params) => {
      state.m1Definite2 = params;
    },
    SET_M1DEFINITE16: (state, params) => {
      state.m1Definite16 = params;
    },
    SET_M1DEFINITE3: (state, params) => {
      state.m1Definite3 = params;
    }
  }
};

export default creditFirst;
