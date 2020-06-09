const actions = {
  setNextFooter: ({ commit }, nextFooter) => {
    return commit("SET_NEXTFOOTER", nextFooter);
  },
  setDefinite1: ({ commit }, definite1) => {
    return commit("SET_DEFINITE1", definite1);
  },
  setDefinite2: ({ commit }, definite2) => {
    return commit("SET_DEFINITE2", definite2);
  },
  setDefinite3: ({ commit }, definite3) => {
    return commit("SET_DEFINITE3", definite3);
  }
};

export default actions;
