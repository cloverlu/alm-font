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
  userBizType: state => state.userStore.userBizType,
  addmore: state => state.approvalStore.addmore,
  approveDetail: state => type => {
    var approveData = "";
    approveData = state.approvalStore.approveDetail;
    var obj = {};
    switch (type) {
      case "m1":
        var params = {
          billBeginDate: "",
          billAmout: "",
          billLength: ""
        };
        obj.definite1 = Object.assign({}, loanlnspection.m1.definite1, params);
        obj.definite2 = loanlnspection.m1.definite2;
        obj.definite16 = loanlnspection.m1.definite16;
        break;
      case "m2":
        var params12 = {
          custName: "",
          lineAmout: "",
          lineBalance: ""
        };
        obj.definite12 = Object.assign(
          {},
          loanlnspection.m2.definite12,
          params12
        );
        obj.definite13 = loanlnspection.m2.definite13;
        obj.definite11 = loanlnspection.m2.definite11.creditInfo;
        obj.definite10 = loanlnspection.m2.definite10.creditInfo;
        obj.definite5 = loanlnspection.m2.definite5.financeInfo;
        obj.definite18 = loanlnspection.m2.definite18;
        break;
      case "m3":
        var params18 = {
          lineBalance: ""
        };
        obj.newly18 = Object.assign({}, loanlnspection.m3.newly18, params18);
        obj.definite13 = loanlnspection.m3.definite13;
        obj.definite11 = loanlnspection.m3.definite11.creditInfo;
        obj.definite10 = loanlnspection.m3.definite10.creditInfo;
        obj.credit89 = loanlnspection.m3.credit89.financeInfo;
        obj.definite6 = loanlnspection.m3.definite6;
        obj.definite17 = loanlnspection.m3.definite17;
        break;
      case "m4":
        var params9 = {
          custName: ""
        };
        var imageList = {
          pic_1s: []
        };
        obj.newly9 = Object.assign({}, loanlnspection.m4.newly9, params9);
        obj.definite7 = loanlnspection.m4.definite7;
        obj.imageList = imageList;
        break;
      case "m5":
        var params14 = {
          custName: "",
          contractNo: "",
          bizSubKind: "",
          loanAmout: "",
          loanLength: "",
          repayKind: "",
          repayDate: ""
        };

        obj.definite14 = Object.assign(
          {},
          loanlnspection.m5.definite14,
          params14
        );
        obj.definite16 = loanlnspection.m5.definite16;
        break;
      case "m6":
        var params1 = {
          checkModel: ""
        };

        obj.newly1 = Object.assign({}, loanlnspection.m6.newly1, params1);
        obj.newly2 = loanlnspection.m6.newly2.assetCreditInfo;
        obj.newly3 = loanlnspection.m6.newly3;
        obj.newly45 = loanlnspection.m6.newly45;
        obj.definite16 = loanlnspection.m6.definite16;
        break;
    }
    Object.keys(obj).forEach(key => {
      if (key) {
        if (key === "definite11" || key === "definite10") {
          approveData = state.approvalStore.approveDetail.creditInfo;
        } else if (key === "definite5" || key === "credit89") {
          approveData = state.approvalStore.approveDetail.financeInfo;
        } else if (key === "newly2") {
          approveData = state.approvalStore.approveDetail.assetCreditInfo;
        } else {
          approveData = state.approvalStore.approveDetail;
        }

        Object.keys(obj[key]).forEach(k => {
          if (approveData) {
            obj[key][k] = approveData[k];
          }
        });
        if (key === "definite10" || key === "definite11") {
          obj[key].msg = state.approvalStore.approveDetail.msg;
        } else if (key === "newly2") {
          obj[key].summaryForCheck =
            state.approvalStore.approveDetail.summaryForCheck;
        }
      }
    });

    return obj;
  },
  handleParams: state => state.approvalStore.handleParams,
  userBizId: state => state.userStore.userBizId,
  userForBizDetail: state => (name, type) => {
    var forBizDetail = "";
    forBizDetail = state.userStore.userForBizDetail;

    var obj2 = {};
    switch (name) {
      case "definiteUserAll":
        switch (type) {
          case "m1":
            obj2 = loanlnspection.m1.definite1;
            break;
          case "m2":
            obj2 = loanlnspection.m2.definite12;
            break;
          case "m3":
            obj2 = loanlnspection.m3.newly18;
            break;
          case "m4":
            obj2 = loanlnspection.m4.newly9;
            break;
          case "m5":
            obj2 = loanlnspection.m5.definite14;
            break;
          case "m6":
            obj2 = loanlnspection.m6.newly1;
        }
        break;
      case "userFirstDefinite2":
        obj2 = loanlnspection.m1.definite2;
        break;
      case "userFirstDefinite16":
        obj2 = loanlnspection.m1.definite16;
        break;
      case "userFirstDefinite3":
        obj2 = loanlnspection.m1.definite3;
        break;
      case "userRoutineDefinite13":
        obj2 = loanlnspection.m2.definite13;
        break;
      case "userRoutineDefinite11":
        obj2 = loanlnspection.m2.definite11.creditInfo;
        forBizDetail = state.userStore.userForBizDetail.creditInfo;
        break;
      case "userRoutineDefinite10":
        obj2 = loanlnspection.m2.definite10.creditInfo;
        forBizDetail = state.userStore.userForBizDetail.creditInfo;

        break;
      case "userRoutineDefinite5":
        obj2 = loanlnspection.m2.definite5.financeInfo;
        forBizDetail = state.userStore.userForBizDetail.financeInfo;
        break;
      case "userRoutineDefinite18":
        obj2 = loanlnspection.m2.definite18;
        break;
      case "userRoutineDefinite3":
        obj2 = loanlnspection.m2.definite3;
        break;
      case "userOveralltDefinite13":
        obj2 = loanlnspection.m3.definite13;
        break;
      case "userOveralltDefinite11":
        obj2 = loanlnspection.m3.definite11.creditInfo;
        forBizDetail = state.userStore.userForBizDetail.creditInfo;
        break;
      case "userOveralltDefinite10":
        obj2 = loanlnspection.m3.definite10.creditInfo;
        forBizDetail = state.userStore.userForBizDetail.creditInfo;
        break;
      case "userOveralltDefinite89":
        obj2 = loanlnspection.m3.credit89.financeInfo;
        forBizDetail = state.userStore.userForBizDetail.financeInfo;
        break;
      case "userOveralltDefinite6":
        obj2 = loanlnspection.m3.definite6;
        break;
      case "userOveralltDefinite17":
        obj2 = loanlnspection.m3.definite17;
        break;
      case "userOveralltDefinite3":
        obj2 = loanlnspection.m3.definite3;
        break;
      case "userReInsDefinite7":
        obj2 = loanlnspection.m4.definite7;
        break;
      case "userReInsProcessing4":
        obj2 = loanlnspection.m4.processing4;
        break;
      case "userFastCreDefinite16":
        obj2 = loanlnspection.m5.definite16;
        break;
      case "userFastCreDefinite3":
        obj2 = loanlnspection.m5.definite3;
        break;
      case "userNewly2":
        obj2 = loanlnspection.m6.newly2.assetCreditInfo;
        forBizDetail = state.userStore.userForBizDetail.assetCreditInfo;
        break;
      case "userNewly3":
        obj2 = loanlnspection.m6.newly3;
        break;
      case "userNewly45":
        obj2 = loanlnspection.m6.newly45;
        break;
      case "userNewlyDefinite16":
        obj2 = loanlnspection.m6.definite16;
        break;
      case "userNewlyDefinite3":
        obj2 = loanlnspection.m6.definite3;
        break;
    }
    Object.keys(obj2).forEach(key => {
      if (forBizDetail) {
        obj2[key] = forBizDetail[key];
      }
    });
    if (name === "userRoutineDefinite10" || name === "userOveralltDefinite10") {
      obj2.msg = state.userStore.userForBizDetail.msg;
    } else if (name === "userReInsProcessing4") {
      obj2.imageList = state.userStore.userForBizDetail.pic_1s;
    } else if (name === "userNewly2") {
      obj2.summaryForCheck = state.userStore.userForBizDetail.summaryForCheck;
    }

    return obj2;
  }
};

export default getters;
