const actions = {
  setNextFooter: ({ commit }, nextFooter) => {
    return commit("SET_NEXTFOOTER", nextFooter);
  },
  setDefinite1: ({ commit }, definite1) => {
    return commit("SET_DEFINITE1", definite1);
  }
};

export default actions;
