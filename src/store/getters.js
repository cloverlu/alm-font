import { loanlnspection } from "../utils/allKeys";

const getters = {
  nextFooter: state => state.footerNext.nextFooter,
  prevFooter: state => state.footerNext.prevFooter,
  scrollToPo: state => state.footerNext.scrollToPo,
  forBizDetail: state => name => {
    var forBizDetail = "";
    forBizDetail = state.footerNext.forBizDetail;
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
        break;
      case "creditRoutineIndex":
        obj2 = loanlnspection.m2.definite12;
        break;
      case "definite13":
        obj2 = loanlnspection.m2.definite13;
        break;
      case "definite11":
        obj2 = loanlnspection.m2.definite11.creditInfo;
        forBizDetail = state.footerNext.forBizDetail.creditInfo;
        break;
      case "definite10":
        obj2 = loanlnspection.m2.definite10.creditInfo;
        forBizDetail = state.footerNext.forBizDetail.creditInfo;

        break;
      case "definite5":
        obj2 = loanlnspection.m2.definite5.financeInfo;
        forBizDetail = state.footerNext.forBizDetail.financeInfo;
        break;
      case "routineDefinite18":
        obj2 = loanlnspection.m2.definite18;
        break;
      case "routineDefinite3":
        obj2 = loanlnspection.m2.definite3;
        break;
      case "creditOverallIndex":
        obj2 = loanlnspection.m3.newly18;
        break;
      case "overalltDefinite13":
        obj2 = loanlnspection.m3.definite13;
        break;
      case "overalltDefinite11":
        obj2 = loanlnspection.m3.definite11.creditInfo;
        forBizDetail = state.footerNext.forBizDetail.creditInfo;
        break;
      case "overalltDefinite10":
        obj2 = loanlnspection.m3.definite10.creditInfo;
        forBizDetail = state.footerNext.forBizDetail.creditInfo;
        break;
      case "overalltDefinite89":
        obj2 = loanlnspection.m3.credit89.financeInfo;
        forBizDetail = state.footerNext.forBizDetail.financeInfo;
        break;
      case "overalltDefinite6":
        obj2 = loanlnspection.m3.definite6;
        break;
      case "overalltDefinite17":
        obj2 = loanlnspection.m3.definite17;
        break;
      case "overalltDefinite3":
        obj2 = loanlnspection.m3.definite3;
        break;
      case "repaymentInspectionIndex":
        obj2 = loanlnspection.m4.newly9;
        break;
      case "repaymentInspectionDefinite7":
        obj2 = loanlnspection.m4.definite7;
        break;
      case "processing4":
        obj2 = loanlnspection.m4.processing4;
        break;
      case "fastCreditFirstIndex":
        obj2 = loanlnspection.m5.definite14;
        break;
      case "fastCreditFirstDefinite16":
        obj2 = loanlnspection.m5.definite16;
        break;
      case "fastCreditFirstDefinite3":
        obj2 = loanlnspection.m5.definite3;
        break;
      case "dailyInspectionIndex":
        obj2 = loanlnspection.m6.newly1;
        break;
      case "newly2":
        obj2 = loanlnspection.m6.newly2.assetCreditInfo;
        forBizDetail = state.footerNext.forBizDetail.assetCreditInfo;
        break;
      case "newly3":
        obj2 = loanlnspection.m6.newly3;
        break;
      case "newly45":
        obj2 = loanlnspection.m6.newly45;
        break;
      case "newlyDefinite16":
        obj2 = loanlnspection.m6.definite16;
        break;
      case "newlyDefinite3":
        obj2 = loanlnspection.m6.definite3;
        break;
    }
    Object.keys(obj2).forEach(key => {
      if (forBizDetail) {
        obj2[key] = forBizDetail[key];
      }
    });
    if (name === "definite10" || name === "overalltDefinite10") {
      obj2.msg = state.footerNext.forBizDetail.msg;
    } else if (name === "processing4") {
      obj2.imageList = state.footerNext.forBizDetail.pic_1s;
    } else if (name === "newly2") {
      obj2.summaryForCheck = state.footerNext.forBizDetail.summaryForCheck;
    }

    return obj2;
  },
  saveFlag: state => state.footerNext.saveFlag,
  queryDetail: state => state.footerNext.queryDetail,
  m1Definite1: state => state.creditFirst.m1Definite1,
  m1Definite2: state => state.creditFirst.m1Definite2,
  m1Definite16: state => state.creditFirst.m1Definite16,
  m1Definite3: state => state.creditFirst.m1Definite3,
  bizType: state => state.userStore.bizType,
  addmore: state => state.approvalStore.addmore
};

export default getters;
