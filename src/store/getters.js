const getters = {
  nextFooter: state => state.footerNext.nextFooter,
  prevFooter: state => state.footerNext.prevFooter,
  m1Definite1: state => state.creditFirst.m1Definite1,
  m1Definite2: state => state.creditFirst.m1Definite2,
  m1Definite16: state => state.creditFirst.m1Definite16,
  m1Definite3: state => state.creditFirst.m1Definite3,
  bizType: state => state.userStore.bizType,
  addmore: state => state.approvalStore.addmore
};

export default getters;
