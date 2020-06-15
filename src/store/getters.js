const getters = {
  nextFooter: state => state.footerNext.nextFooter,
  prevFooter: state => state.footerNext.prevFooter,
  definite1: state => state.creditFirst.definite1,
  definite2: state => state.creditFirst.definite2,
  definite3: state => state.creditFirst.definite3,
  definite5: state => state.creditRoutine.definite5,
  definite10: state => state.creditRoutine.definite10,
  definite11: state => state.creditRoutine.definite11,
  definite12: state => state.creditRoutine.definite12,
  definite13: state => state.creditRoutine.definite13,
  definite4: state => state.creditRoutine.definite4,
  routineDefinite3: state => state.creditRoutine.routineDefinite3,
  newly1: state => state.dailyInspection.newly1,
  bizType: state => state.userStore.bizType
};

export default getters;
