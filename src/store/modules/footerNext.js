const footerNext = {
  state: {
    nextFooter: "",
    prevFooter: ""
  },
  mutations: {
    SET_NEXTFOOTER: (state, nextFooter) => {
      state.nextFooter = nextFooter;
    },
    SET_PREVFOOTER: (state, prevFooter) => {
      state.prevFooter = prevFooter;
    }
  }
};

export default footerNext;
