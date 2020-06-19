const actions = {
  setNextFooter: ({ commit }, nextFooter) => {
    return commit("SET_NEXTFOOTER", nextFooter);
  },
  setPrevFooter: ({ commit }, prevFooter) => {
    return commit("SET_PREVFOOTER", prevFooter);
  },
  setm1Definite1: ({ commit }, m1Definite1) => {
    return commit("SET_M1DEFINITE1", m1Definite1);
  },
  setm1Definite2: ({ commit }, m1Definite2) => {
    return commit("SET_M1DEFINITE2", m1Definite2);
  },
  setm1Definite16: ({ commit }, m1Definite16) => {
    return commit("SET_M1DEFINITE16", m1Definite16);
  },
  setm1Definite3: ({ commit }, m1Definite3) => {
    return commit("SET_M1DEFINITE1", m1Definite3);
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
