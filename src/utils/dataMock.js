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

const loanInsList = _ => {
  const bizType = [
    "小企业授信业务首次跟踪检查",
    "小企业授信业务贷后例行检查",
    "小企业授信业务贷后全面检查",
    "小企业授信业务还款资金落实情况检查",
    "小企业法人快捷贷首次检查",
    "小企业法人快捷贷贷后日常检查"
  ];
  // 1-应做，2-未做，3-已做
  const status = [1, 2, 3];
  const bizStatus = [].concat(status, ...status);
  const data = [];
  const date = "2020-06-02";
  for (let i = 0; i <= 5; i++) {
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

export { todoListTitle, loanInsList };
