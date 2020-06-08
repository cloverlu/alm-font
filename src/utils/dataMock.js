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

const DetailsOfIOU = {
  queryType: "1", // 查询类型
  orgName: "张三有限责任公司", // 机构名称
  managerName: "经理", // 管户名称
  billNo: "1", // 借据编号
  checkType: "小企业授信业务贷后例行检查", // 检查类型
  custName: "张三", // 客户名称  queryType为2时，必传；其他情况非必传
  returnCode: "200", // 成功标识
  returnMsg: "成功", // 返回信息
  creditKind: "张三", // 借据列表对象
  creditSubLoanKind: "小企业授信业务首次跟踪检查", // 授信品种
  billAmout: "45000", // 借据金额
  lineAmout: "45000", // 授信额度金额
  billLength: "三年", // 借据期限
  billBeginDate: "2020-5-20", // 借据起期
  billEndDate: "2023-5-20", // 借据止期
  lineBalance: "3000", // 借据余额

  checkAddr: "xxxxxxxx", // 检查地点
  cooperate: 2, // 检查配合程度
  addrChangedMsg: "xxxxx", // 生产经营场所变动情况
  staff: "李四", // 接待人员

  queryDate: "2020-06-01", // 征信报告查询日期

  unPayOffLoanNum: "68", // 未结清贷款笔数
  unPayOffAmout: "90000", // 未结清贷款金额
  finInstitutionNum: "xxxx", // 涉及金融机构
  sumBalance: "9000", // 未结清贷款结余

  guaranteeNum: "78", // 对外担保笔数
  guaranteeAmout: "9000", // 对外担保金额
  guaranteeBalance: "9000", // 对外担保结余

  existBadRecord: false, // 贷款期间借款企业是否发生逾期、欠息等不良信用记录
  badRecordMsg: "不良信用记录情况说明 (分析是否对我行贷款偿还产生不良影响）", // 不良信用记录说明
  changedMsg: "变化情况为(分析是否对我行贷款偿还产生不良影响）", // 不良信用记录说明

  oweTaxRecordNum: "67", // 欠税记录
  civilJudgmentRecordNum: "xxx", // 民事判决
  forceImpleRecordNum: "67", // 强制执行记录
  administRecordNum: "655", // 行政处罚记录

  existCreditChage: true, // 征信记录是否有异常变化 --1.借款企业征信
  // queryDate: "", // 征信记录是否有异常变化 --2.关联企业征信
  // queryDate: "", // 征信记录是否有异常变化 --3.法人保证人征信
  creditChageMsg: "不良信用记录情况说明 (分析是否对我行贷款偿还产生不良影响）", // 征信记录变化说明

  RecentNegativeInformation:
    "根据《小企业授信业务贷后负面信息监测报告》填写负面信息查询情况，并结合现场检查情况，判断负面信息对企业偿债能力的影响。", // 近期负面信息情况
  DebitCardNum: "6219***", // 未销户贷记卡账户
  DebitCardLineAmout: "50000", // 授信总金额
  addedOverdues: "", // 企业或企业主征信是否有新增逾期记录
  addedOverduesMsg: "", // 逾期记录信息概要
  stockLastBalance: "200", //存货余额
  stockChangSitu: "xxx", //存货变动情况
  busIncLastBalance: "200", //营业收入余额
  busIncChangSitu: "xxx", //营业收入变动情况
  dailyExpenLastBalance: "200", //水煤电气余额
  dailyExpenChangSitu: "xxx", //水煤电气变动情况
  proAndOpeAbnormalSuitMsg:
    "根据财务信息及现场检查情况，判断企业是否生产经营异常(停产、半停产、员工数量骤减、设备开工率不足等)，并详细阐述异常情况对企业偿债能力的影响。", //企业生产经营是否出现异常情况说明
  existRisk: true, //是否存在风险预警信号
  riskMsg: "有危险", //预警信号说明
  suggest: "建议你重置", //检查结论及措施建议
  emplSign: "admin" //检查人员签字
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

export { todoListTitle, loanInsList, definite1, payType, DetailsOfIOU };
