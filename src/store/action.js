// import { infoDetail } from "../api/loanlnspection";
const api = {
  // 流程详情
  infoDetail(data) {
    return data.$axios({
      url: `/alm/postLoan/business/queryForBizDtail`,
      method: "GET",
      params: {
        bizId: data.bizId
      }
    });
  },
  //基本信息详情
  queryDetail(data) {
    return data.$axios({
      url: `/alm/postLoan/business/queryForDtail`,
      method: "GET",
      params: {
        bizId: data.bizId
      }
    });
  },
  //下一阶段处理人
  handleQuery(data) {
    return data.$axios({
      url: `/alm/employee/getListByParams`,
      method: "GET",
      params: {
        orgName: data.orgName,
        postCode: data.postCode
      }
    });
  }
};
const actions = {
  setNextFooter: ({ commit }, nextFooter) => {
    return commit("SET_NEXTFOOTER", nextFooter);
  },
  setPrevFooter: ({ commit }, prevFooter) => {
    return commit("SET_PREVFOOTER", prevFooter);
  },
  setScrollToPo: ({ commit }, scrollToPo) => {
    return commit("SET_SCROLLTOPO", scrollToPo);
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
  setBizType: ({ commit }, userBizType) => {
    return commit("SET_USERBIZTYPE", userBizType);
  },
  setUserBizId: ({ commit }, userBizId) => {
    return commit("SET_USERBIZID", userBizId);
  },
  // approval加载m3时，蓝色横条的初始位置
  setAddmore: ({ commit }, addmore) => {
    return commit("SET_ADDMORE", addmore);
  },
  // 上一步下一步需要走的详情接口
  async setforDizDetail({ commit }, data) {
    const params = await api.infoDetail(data).then(res => {
      if (res.status === 200 && res.data.returnCode === "200000") {
        if (res.data.data) {
          return res.data.data;
        }
      }
    });
    return commit("SET_FORBIZDETAIL", params);
  },
  // 用户模块上一步下一步需要走的详情接口
  async setUserforDizDetail({ commit }, data) {
    const params = await api.infoDetail(data).then(res => {
      if (res.status === 200 && res.data.returnCode === "200000") {
        if (res.data.data) {
          return res.data.data;
        }
      }
    });
    return commit("SET_USERFORBIZDETAIL", params);
  },
  // 基本信息
  async setqueryDetail({ commit }, data) {
    const params = await api.queryDetail(data).then(res => {
      if (res.status === 200 && res.data.returnCode === "200000") {
        if (res.data.data) {
          return res.data.data;
        }
      }
    });
    return commit("SET_QUERYDETAIL", params);
  },
  setSaveFlag: ({ commit }, saveFlag) => {
    return commit("SET_SAVEFLAG", saveFlag);
  },
  // 审批详情（点击更多出现的详情）
  async setApproveDetail({ commit }, data) {
    const params = await api.infoDetail(data).then(res => {
      if (res.status === 200 && res.data.returnCode === "200000") {
        if (res.data.data) {
          return res.data.data;
        }
      }
    });
    return commit("SET_APPROVEDETAIL", params);
  },
  // 下一阶段处理人
  async setHandleParams({ commit }, data) {
    const params = await api.handleQuery(data).then(res => {
      if (res.status === 200 && res.data.returnCode === "200000") {
        if (res.data.data) {
          return res.data.data;
        }
      }
    });
    return commit("SET_HANDLEPARAMS", params);
  }
};

export default actions;
