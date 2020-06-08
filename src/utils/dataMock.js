const todoListTitle = [
  {
    id: 1,
    text: "业务审批流程待处理提醒",
    icon: "iconfont icontixing2",
    warningNumber: 17
  },
  {
    id: 2,
    text: "贷后检查待处理提醒",
    icon: "iconfont icondaikuan2",
    warningNumber: 188
  },
  {
    id: 3,
    text: "客户账户余额不足提醒",
    icon: "iconfont iconzhanghuyue2",
    warningNumber: 100
  },
  {
    id: 4,
    text: "贷款到期提醒",
    icon: "iconfont icondaikuanshenqing1",
    warningNumber: 1
  },
  {
    id: 5,
    text: "信贷运营监控预警核查提醒",
    icon: "iconfont iconguochengjiankong-jianduhecha2",
    warningNumber: ""
  },
  {
    id: 6,
    text: "信贷运营监控风险提示",
    icon: "iconfont iconfengxiantishi2",
    warningNumber: 1
  },
  {
    id: 7,
    text: "行业信用风险提醒",
    icon: "iconfont iconxinyongka",
    warningNumber: ""
  }
];

const bizType = [
  "小企业授信业务首次跟踪检查",
  "小企业授信业务贷后例行检查",
  "小企业授信业务贷后全面检查",
  "小企业授信业务还款资金落实情况检查",
  "小企业法人快捷贷首次检查",
  "小企业法人快捷贷贷后日常检查"
];
const loanInsList = _ => {
  // 1-应做，2-未做，3-已做
  const status = [1, 2, 3];
  const bizStatus = [].concat(status, ...status);
  const data = [];
  const date = "2020-06-02";
  for (let i = 0; i <= 6; i++) {
    data.push({
      bizType: bizType[i],
      bizStatus: bizStatus[i],
      noticeDate: date,
      endDate: date,
      bizId: i,
      custNname: "张三",
      custNo: "1111111111111111111",
      billNo: "222222222222222222"
    });
  }
  return data;
};

const definite1 = {
  custName: "张三有限公司",
  bizType: bizType[0],
  billBeginDate: "20200201",
  billAmout: "50000",
  billLength: "1个月"
};

// const payType = ["贷款人受托支付", "借款人自主支付", "受托支付+自主支付"];
const payType = [
  {
    key: 1,
    value: "贷款人受托支付"
  },
  {
    key: 2,
    value: "借款人自主支付"
  },
  {
    key: 3,
    value: "受托支付+自主支付"
  }
];

//definite1
const definite1Field = [
  {
    name: "要求",
    id: 1,
    modelName: "equireCheck"
  },
  {
    name: "落实情况",
    id: 2,
    modelName: "checked"
  }
];
//definite2
const definite2Field = [
  {
    name: "资金使用情况详细说明",
    id: 1,
    modelName: "detailMsg4useAmout"
  },
  {
    name: "提供纸质或影像资料的信息来源",
    id: 2,
    modelName: "msgSource"
  }
];

//definite2
const definite2Field2 = [
  {
    name: "情况说明",
    id: 1,
    modelName: "msg"
  }
];

//配合程度
const coordinate = [
  {
    key: 1,
    value: "配合"
  },
  {
    key: 0,
    value: "不配合"
  }
];

//是否
const yesNo = [
  {
    key: 1,
    value: "是"
  },
  {
    key: 0,
    value: "否"
  }
];

export {
  todoListTitle,
  loanInsList,
  definite1,
  payType,
  definite1Field,
  definite2Field,
  definite2Field2,
  coordinate,
  yesNo
};
