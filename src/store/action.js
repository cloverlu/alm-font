const actions = {
  setNextFooter: ({ commit }, nextFooter) => {
    return commit("SET_NEXTFOOTER", nextFooter);
  },
  setPrevFooter: ({ commit }, prevFooter) => {
    return commit("SET_PREVFOOTER", prevFooter);
  },
  setDefinite1: ({ commit }, definite1) => {
    return commit("SET_DEFINITE1", definite1);
  },
  setDefinite2: ({ commit }, definite2) => {
    return commit("SET_DEFINITE2", definite2);
  },
  setDefinite3: ({ commit }, definite3) => {
    return commit("SET_DEFINITE3", definite3);
  },
  setDefinite12: ({ commit }, definite12) => {
    return commit("SET_DEFINITE12", definite12);
  },
  setDefinite13: ({ commit }, definite13) => {
    return commit("SET_DEFINITE13", definite13);
  },
  setDefinite10: ({ commit }, definite10) => {
    return commit("SET_DEFINITE10", definite10);
  },
  setDefinite11: ({ commit }, definite11) => {
    return commit("SET_DEFINITE11", definite11);
  },
  setDefinite5: ({ commit }, definite5) => {
    return commit("SET_DEFINITE5", definite5);
  },
  setDefinite4: ({ commit }, definite4) => {
    return commit("SET_DEFINITE4", definite4);
  },
  setRoutineDefinite3: ({ commit }, routineDefinite3) => {
    return commit("SET_RoutineDefinite3", routineDefinite3);
  },
  setNewly1: ({ commit }, newly1) => {
    return commit("SET_Newly1", newly1);
  },
  setBizType: ({ commit }, bizType) => {
    return commit("SET_BIZTYPE", bizType);
  },
  // approval加载m3时，蓝色横条的初始位置
  setAddmore: ({ commit }, addmore) => {
    return commit("SET_ADDMORE", addmore);
  }
};

export default actions;
