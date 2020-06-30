// import { infoDetail } from "../api/loanlnspection";
const api = {
  // 类型编码唯一性校验
  infoDetail(data) {
    return data.$axios({
      url: `/alm/postLoan/business/queryForBizDtail`,
      method: "GET",
      params: {
        bizId: data.bizId
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
  setBizType: ({ commit }, bizType) => {
    return commit("SET_BIZTYPE", bizType);
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
  setSaveFlag: ({ commit }, saveFlag) => {
    return commit("SET_SAVEFLAG", saveFlag);
  }
};

export default actions;
