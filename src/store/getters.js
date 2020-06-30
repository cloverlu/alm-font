import { loanlnspection } from "../utils/allKeys";
const getters = {
  nextFooter: state => state.footerNext.nextFooter,
  prevFooter: state => state.footerNext.prevFooter,
  scrollToPo: state => state.footerNext.scrollToPo,
  forBizDetail: state => name => {
    const forBizDetail = state.footerNext.forBizDetail;
    var obj2 = {};
    switch (name) {
      case "creditFirstIndex":
        obj2 = loanlnspection.m1.definite1;
        break;
      case "firstDefinite2":
        obj2 = loanlnspection.m1.definite2;
        break;
      case "firstDefinite16":
        obj2 = loanlnspection.m1.definite16;
        break;
      case "firstDefinite3":
        obj2 = loanlnspection.m1.definite3;
    }
    Object.keys(obj2).forEach(key => {
      obj2[key] = forBizDetail[key];
    });
    return obj2;
  },
  saveFlag: state => state.footerNext.saveFlag,
  m1Definite1: state => state.creditFirst.m1Definite1,
  m1Definite2: state => state.creditFirst.m1Definite2,
  m1Definite16: state => state.creditFirst.m1Definite16,
  m1Definite3: state => state.creditFirst.m1Definite3,
  bizType: state => state.userStore.bizType,
  addmore: state => state.approvalStore.addmore
};

export default getters;
