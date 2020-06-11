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

const cooperationType = [
  {
    key: 1,
    value: "配合"
  },
  {
    key: 0,
    value: "不配合"
  }
];

// 检查类型
const bizTypes = [
  {
    key: "m1",
    value: "小企业授信业务首次跟踪检查"
  },
  {
    key: "m2",
    value: "小企业授信业务贷后例行检查"
  },
  {
    key: "m3",
    value: "小企业授信业务贷后全面检查"
  },
  {
    key: "m4",
    value: "小企业授信业务还款资金落实情况检查"
  },
  {
    key: "m5",
    value: "小企业法人快捷贷首次检查"
  },
  {
    key: "m6",
    value: "小企业法人快捷贷贷后日常检查"
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

// 贷款支付方式
const payKindsArr = [
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

// 担保方式
const securityKindsArr = [
  {
    key: 1,
    value: "信用"
  },
  {
    key: 2,
    value: "抵押"
  },
  {
    key: 3,
    value: "质押"
  },
  {
    key: 4,
    value: "保证"
  },
  {
    key: 5,
    value: "其他"
  }
];

//definte16,影像数据字段
const definte16 = _ => {
  const definite16Array = [];
  const valueArray = [
    "《小企业授信业务额度借款支用单》或《用款申请》",
    "《小企业贷款受托支付申请书》或自主支付清单",
    "汇款凭证",
    "账户流水",
    "受托支付合同",
    "入库单",
    "贷款购买标的（如原材料、机器设备等）",
    "企业大门",
    "企业经营场地或生产车间",
    "检查人员现场检查影像等",
    "其他"
  ];
  for (let i = 0; i < valueArray.length; i++) {
    const a = "m1_" + i;
    definite16Array.push({
      id: i,
      text: valueArray[i],
      vModel: a,
      vId: "m1" + i
    });
  }
  return definite16Array;
};
//definte18,影像维护字段
const definte18 = _ => {
  const definite18Array = [];
  const valueArray = [
    "财务报表",
    "纳税材料",
    "水电费材料",
    "银行流水",
    "其他经营材料",
    "企业办公场所（含企业大门）",
    "企业生产车间（含重要生产或经营工序）",
    "企业重要生产或经营设备、存货",
    "检查人员现场检查的影像",
    "抵押物影像",
    "其他"
  ];
  for (let i = 0; i < valueArray.length; i++) {
    const a = "m2_" + i;
    definite18Array.push({
      id: i,
      text: valueArray[i],
      vModel: a,
      vId: "m" + i
    });
  }
  return definite18Array;
};

// processing2-4 影像维护字段
const processing4 = _ => {
  const processing4Array = [];
  const valueArray = ["其他"];
  for (let i = 0; i < valueArray.length; i++) {
    const a = "m4_" + i;
    processing4Array.push({
      id: i,
      text: valueArray[i],
      vModel: a,
      vId: "m" + i
    });
  }
  return processing4Array;
};

//definte17,影像数据字段
const definte17 = _ => {
  const definite17Array = [];
  const valueArray = [
    "能耗类材料",
    "银行流水",
    "主要上下游客户合同单据",
    "其他财务经营材料",
    "企业办公场所（含企业大门）",
    "企业生产车间（含重要生产或经营工序）",
    "企业重要生产或经营设备、存货",
    "检查人员现场检查的影像",
    "抵押物影像",
    "其他"
  ];
  for (let i = 0; i < valueArray.length; i++) {
    const a = "m6_" + i;
    definite17Array.push({
      id: i,
      text: valueArray[i],
      vModel: a,
      vId: "m6" + i
    });
  }
  return definite17Array;
};

//新增1-8
const newly18 = {
  custName: "张三有限公司",
  bizType: bizType[2],
  lineAmout: "200000", //授信金额
  lineBalance: "50000" //授信余额
};

const securityKinds = _ => {
  const kinds = ["信用", "抵押", "质押", "保证", "其它"];
  const data = [];
  for (let i = 1; i < kinds.length; i++) {
    data.push({
      key: i,
      value: kinds[i]
    });
  }
  return data;
};

//新增1-8里的内容
const newly18One = [
  {
    name: "健康、 嗜好、家庭关系等方面",
    id: 1,
    modelName: "HoldPensonRisk"
  }
];
//新增1-8里的内容
const newly18Two = [
  {
    name:
      "股权变化、关键管理人员变动、关联企业变动等，是否存在偏离主业、盲目扩张等问题",
    id: 1,
    modelName: "managerRisk"
  }
];

//财务科目里的字段
const caiwu = {
  one: ["应收票据", "存货", "私人借款", "应付票据"],
  two: ["应收账款", "银行借款", "应付账款"],
  three: ["营业收入", "日常消耗", "人工成本", "现金流"],
  four: ["原材料成本", "财务费用", "纳税数额", "利润"],
  // five: ["应收票据", "存货", "私人借款", "应付票据"],
  // six: ["应收账款", "银行借款", "应付账款"],
  seven: ["营业收入", "员工成本", "现金流", "利润"],
  eight: ["营业成本", "财务费用", "纳税数额"]
};

const caiwuOne = [
  {
    id: 1,
    title: "应收票据",
    items: {
      currentBalance: "colDebtBalance", //当前余额
      lastBalance: "colDebtLastBalance", //应收票据上期检查（或调查）时点余额
      Chang30Msg: "colDebtChang30Msg" // 应收票据变动超过30%，原因
    }
  },
  {
    id: 2,
    title: "存货",
    items: {
      currentBalance: "stockChangSitu", //存货上次全面检查或调查时余额
      lastBalance: "stockLastBalance", //存货本次检查存货变动情况
      Chang30Msg: "stockChang30Msg" // 存货变动超过30%，原因
    }
  },
  {
    id: 3,
    title: "私人借款",
    items: {
      currentBalance: "loanForPsonBalance", //私人借款当前余额
      lastBalance: "loanForPsonLastBalance", //私人借款上期检查（或调查）时点余额
      Chang30Msg: "loanForPsonChang30Msg" // 私人借款变动超过30%，原因
    }
  },
  {
    id: 4,
    title: "应付票据",
    items: {
      currentBalance: "payDebtBalance", //应付票据当前余额
      lastBalance: "payDebtLastBalance", //应付票据上期检查（或调查）时点余额
      Chang30Msg: "payDebtChang30Msg" // 应付票据变动超过30%，原因
    }
  }
];

const caiwuTwo = [
  {
    id: 1,
    title: "应收账款",
    items: {
      currentBalance: "colCapitalBalance", //应收账款当前余额
      lastBalance: "colCapitalLastBalance", //应收账款上期检查（或调查）时点余额
      Chang30Msg: "colCapitalChang30Msg" // 应收账款变动超过30%，原因
    }
  },
  {
    id: 2,
    title: "银行借款",
    items: {
      currentBalance: "loanForBankBalance", //银行借款当前余额
      lastBalance: "loanForBankLastBalance", //银行借款上期检查（或调查）时点余额
      Chang30Msg: "loanForBankChang30Msg" // 银行借款变动超过30%，原因
    }
  },
  {
    id: 3,
    title: "应付账款",
    items: {
      currentBalance: "payCapitalBalance", //应收账款当前余额
      lastBalance: "payCapitalLastBalance", //应收账款上期检查（或调查）时点余额
      Chang30Msg: "payCapitalChang30Msg" // 应收账款变动超过30%，原因}
    }
  }
];

const caiwuThree = [
  {
    id: 1,
    title: "营业收入",
    items: {
      Inc3MSitu: "busInc3MSitu", //营业收入近三个月的情况
      Chang30Msg: "busIncChang30Msg" // 营业收入剔除季节性因素后变动超30%，原因
    }
  },
  {
    id: 2,
    title: "日常消耗",
    items: {
      Inc3MSitu: "dailyExpen3MSitu", //近三个月的情况
      Chang30Msg: "dailyExpenChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 3,
    title: "人工成本",
    items: {
      Inc3MSitu: "emplCost3M", //近三个月的情况
      Chang30Msg: "emplCostChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 4,
    title: "现金流",
    items: {
      Inc3MSitu: "cash3M", //近三个月的情况
      Chang30Msg: "cashChang30Msg" // 应收账款变动超过30%，原因
    }
  }
];

const caiwuFour = [
  {
    id: 1,
    title: "原材料成本",
    items: {
      Inc3MSitu: "materialCost3M", //营业收入近三个月的情况
      Chang30Msg: "materialCostChang30Msg" // 营业收入剔除季节性因素后变动超30%，原因
    }
  },
  {
    id: 2,
    title: "财务费用",
    items: {
      Inc3MSitu: "financeCost3M", //近三个月的情况
      Chang30Msg: "financeCostChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 3,
    title: "纳税数额",
    items: {
      Inc3MSitu: "payTaxAmout3M", //近三个月的情况
      Chang30Msg: "payTaxAmoutChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 4,
    title: "利润",
    items: {
      Inc3MSitu: "profit3M", //近三个月的情况
      Chang30Msg: "profitChang30Msg" // 应收账款变动超过30%，原因
    }
  }
];

const caiwuSeven = [
  {
    id: 1,
    title: "营业收入",
    items: {
      Inc3MSitu: "busInc3MSitu", //营业收入近三个月的情况
      Chang30Msg: "busIncChang30Msg" // 营业收入剔除季节性因素后变动超30%，原因
    }
  },
  {
    id: 2,
    title: "员工成本",
    items: {
      Inc3MSitu: "emplCost3M", //近三个月的情况
      Chang30Msg: "emplCostChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 3,
    title: "现金流",
    items: {
      Inc3MSitu: "cash3M", //近三个月的情况
      Chang30Msg: "cashChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 4,
    title: "利润",
    items: {
      Inc3MSitu: "profit3M", //近三个月的情况
      Chang30Msg: "profitChang30Msg" // 应收账款变动超过30%，原因
    }
  }
];

const caiwuEight = [
  {
    id: 1,
    title: "营业成本",
    items: {
      Inc3MSitu: "materialCost3M", //营业收入近三个月的情况
      Chang30Msg: "materialCostChang30Msg" // 营业收入剔除季节性因素后变动超30%，原因
    }
  },
  {
    id: 2,
    title: "财务费用",
    items: {
      Inc3MSitu: "financeCost3M", //近三个月的情况
      Chang30Msg: "financeCostChang30Msg" // 变动超过30%，原因
    }
  },
  {
    id: 3,
    title: "纳税数额",
    items: {
      Inc3MSitu: "payTaxAmout3M", //近三个月的情况
      Chang30Msg: "payTaxAmoutChang30Msg" // 变动超过30%，原因
    }
  }
];

export {
  todoListTitle,
  loanInsList,
  definite1,
  payType,
  DetailsOfIOU,
  cooperationType,
  definite1Field,
  definite2Field,
  definite2Field2,
  coordinate,
  yesNo,
  definte16,
  definte17,
  definte18,
  processing4,
  securityKindsArr,
  payKindsArr,
  newly18,
  securityKinds,
  newly18One,
  newly18Two,
  caiwu,
  caiwuOne,
  caiwuTwo,
  caiwuThree,
  caiwuFour,
  caiwuSeven,
  caiwuEight,
  bizTypes
};
