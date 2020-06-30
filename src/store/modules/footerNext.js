const footerNext = {
  state: sessionStorage.getItem("store")
    ? JSON.parse(sessionStorage.getItem("store")).footerNext
    : {
        //下一步
        nextFooter: {},
        //上一步
        prevFooter: "",
        // 滚动条位置
        scrollToPo: {},
        // 详情信息
        forBizDetail: {},
        // 前端判断有没有有保存操作
        saveFlag: []
      },
  mutations: {
    SET_NEXTFOOTER: (state, nextFooter) => {
      state.nextFooter = nextFooter;
    },
    SET_PREVFOOTER: (state, prevFooter) => {
      state.prevFooter = prevFooter;
    },
    SET_SCROLLTOPO: (state, scrollToPo) => {
      state.scrollToPo = scrollToPo;
    },
    SET_FORBIZDETAIL: (state, forBizDetail) => {
      state.forBizDetail = forBizDetail;
    },
    SET_SAVEFLAG: (state, saveFlag) => {
      state.saveFlag = saveFlag;
    }
  }
};

export default footerNext;
