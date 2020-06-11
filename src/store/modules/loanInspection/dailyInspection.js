const dailyInspection = {
  state: {
    newly1: {},
    newly2: {},
    newly3: {},
    newlyDefinite16: {},
    newlyDefinite3: {}
  },
  mutations: {
    SET_Newly1: (state, params) => {
      state.newly1 = params;
    },
    SET_Newly2: (state, params) => {
      state.newly2 = params;
    },
    SET_Newly3: (state, params) => {
      state.newly3 = params;
    },
    SET_NewlyDefinite16: (state, params) => {
      state.newlyDefinite16 = params;
    },
    SET_NewlyDefinite3: (state, params) => {
      state.newlyDefinite3 = params;
    }
  }
};

export default dailyInspection;
