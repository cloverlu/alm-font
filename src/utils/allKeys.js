const mVmodel = num => {
  const definite16 = {};
  for (let i = 0; i < num; i++) {
    const a = `pic_${i + 1}s`;
    definite16[a] = [
      {
        url: ``,
        longitude: "",
        dimension: ""
      }
    ];
  }
  return definite16;
};
const bizId = {
  bizId: ""
};
const loanlnspection = {
  m1: {
    definite1: {
      loanPurpose: "",
      payKind: "",
      bizId: "",
      checked: "",
      requireCheck: "",
      specialChecked: "",
      specialRequireCheck: ""
    },
    definite2: {
      addrChangedMsg: "",
      bizId: "",
      checkAddr: "",
      cooperate: "1",
      detailMsg4useAmout: "",
      msg: "",
      msgSource: "",
      staff: "",
      useAmoutByContract: 1
    },
    definite16: Object.assign({}, mVmodel(11), bizId),
    definite3: {
      existRisk: 1, // 是否存在风险预警信号
      riskMsg: "", // 预警信号说明
      suggest: "", // 建议
      empSign: "", // 签名
      bizId: ""
      // bizApprove: {}
    }
  },
  m2: {
    definite12: {
      bizId: "",
      requireCheck: "", // 审批意见要求
      checked: "", // 审批意见落实情况
      specialRequireCheck: "", // 产品贷后要求
      specialChecked: "", // 产品贷后落实情况
      holdPensonRisk: "", // 实际控制人或法定代表人风险点
      managerRisk: "", // 管理层风险点
      otherRisk: "" // 其他风险点,
    },
    definite13: {
      bizId: "",
      checkAddr: "",
      cooperate: 1,
      addrChangedMsg: "",
      staff: ""
    },
    definite11: {
      creditInfo: {
        queryDateForPer: "",
        // 借款企业部分
        unPayOffLoanNum: "", //未结清贷款笔数
        unPayOffAmout: "", // 未结清贷款金额
        finInstitutionNum: "", // 涉及金融机构
        sumBalance: "", // 未结清贷款结余
        DebitCardNum: "", //未销户贷记卡账户

        DebitCardLineAmout: "", //未销户贷记卡担保金额
        guaranteeNum: "", //对外担保笔数
        guaranteeAmout: "", //对外担保金额
        guaranteeBalance: "", //对外担保结余
        existBadRecord: 1, // 是否逾期 借款企业
        badRecordMsg: "", //  逾期及违约 不良影响
        oweTaxRecordNum: "", // 欠税记录
        civilJudgmentRecordNum: "", // 民事判决
        forceImpleRecordNum: "", // 强制执行记录
        administRecordNum: "", // 行政处罚记录

        creditChageMsg1: "", // 	借款企业 征信变化情况说明
        existCreditChage1: 0, // 借款企业 征信变化是否变化
        creditChageMsg2: "", // 	关联企业 征信变化情况说明
        existCreditChage2: 0, // 关联企业 征信变化是否变化
        creditChageMsg3: "", // 	法人保证人 征信变化情况说明
        existCreditChage3: 0 // 法人保证人 征信变化是否变化
      }
    },
    definite10: {
      creditInfo: {
        queryDateForPer: "",
        creditClassification: "",
        creditClassificationJur: "",
        // 企业实际控制人部分
        unPayOffLoanNumCon: "", //未结清贷款笔数
        unPayOffAmoutCon: "", // 未结清贷款金额
        finInstitutionNumCon: "", // 涉及金融机构
        sumBalanceCon: "", // 未结清贷款结余
        debitCardNumCon: "", //未销户贷记卡账户

        debitCardLineAmoutCon: "", //未销户贷记卡担保金额
        guaranteeNumCon: "", //对外担保笔数
        guaranteeAmoutCon: "", //对外担保金额
        guaranteeBalanceCon: "", //对外担保结余
        badRecordMsgCon: "", //  逾期及违约 不良影响
        existBadRecordCon: 1, // 逾期及违约 是否

        // 企业法定代表人部分
        unPayOffLoanNumJur: "", //未结清贷款笔数
        unPayOffAmoutJur: "", // 未结清贷款金额
        finInstitutionNumJur: "", // 涉及金融机构
        sumBalanceJur: "", // 未结清贷款结余
        debitCardNumJur: "", //未销户贷记卡账户

        debitCardLineAmoutJur: "", //授信总金额
        guaranteeNumJur: "", //对外担保笔数
        guaranteeAmoutJur: "", //对外担保金额
        guaranteeBalanceJur: "", //对外担保结余
        badRecordMsgJur: "", //  逾期及违约 不良影响
        existBadRecordJur: 1, //  逾期及违约 是否存在

        creditChageMsg4: "", // 企业实际控制人 征信变化情况说明
        existCreditChage4: 1, // 企业实际控制人 征信变化是否变化
        creditChageMsg5: "", // 企业法定代表人 征信变化情况说明
        existCreditChage5: 1, // 企业法定代表人 征信变化是否变化
        creditChageMsg6: "", // 企业其他保证人 征信变化情况说明
        existCreditChage6: "", // 企业其他保证人 征信变化是否变化
        creditChageMsg3: "", // 法人保证人 征信变化情况说明
        existCreditChage3: 1, // 法人保证人 征信变化是否变化
        addedOverdues: false,
        pickerVisible: false
      },
      msg: ""
    },
    definite5: {
      financeInfo: {
        stockLastBalance: "", // 上次全面检查或调查时余额  存货
        stockChangSitu: "", // 本次检查存货变动情况  存货
        busIncLastBalance: "", // 上次全面检查或调查时余额  营业收入
        busIncChangSitu: "", // 本次检查存货变动情况  营业收入
        dailyExpenLastBalance: "", // 上次全面检查或调查时余额  水煤气
        dailyExpenChangSitu: "", // 本次检查存货变动情况  水煤气
        proAndOpeAbnormalSuitMsg: "" //
      }
    },
    definite18: Object.assign({}, mVmodel(11), bizId),
    definite3: {
      existRisk: 1, // 是否存在风险预警信号
      riskMsg: "", // 预警信号说明
      suggest: "", // 建议
      empSign: "", // 签名
      bizId: ""
    }
  },
  m3: {
    newly18: {
      lineAmout: "",
      loanBalance: "",
      securityKind: "1",
      otherSecurityKindMsg: "",
      repayKind: "",
      bizId: "",
      requireCheck: "", //审批意见中贷后日常检查要求及落实情况
      checked: "", //审批意见中贷后日常检查要求及落实情况
      specialRequireCheck: "", //产品贷后日常检查特殊要求及落实情况
      specialChecked: "", //产品贷后日常检查特殊要求及落实情况
      rateAndIntfinSerCheck: "", // 利率及综合金融服务的要求及落实情况
      rateAndIntfinSerChecked: "", // 利率及综合金融服务的要求及落实情况
      holdPensonRisk: "", //实际控制人或法定代表人风险点
      managerRisk: "", //管理层风险点
      otherRisk: "" //近期检查发现的其他风险点
    },
    definite13: {
      bizId: "",
      checkAddr: "",
      cooperate: 1,
      addrChangedMsg: "",
      staff: ""
    },
    definite11: {
      creditInfo: {
        queryDateForPer: "",
        // 借款企业部分
        unPayOffLoanNum: "", //未结清贷款笔数
        unPayOffAmout: "", // 未结清贷款金额
        finInstitutionNum: "", // 涉及金融机构
        sumBalance: "", // 未结清贷款结余
        DebitCardNum: "", //未销户贷记卡账户

        DebitCardLineAmout: "", //未销户贷记卡担保金额
        guaranteeNum: "", //对外担保笔数
        guaranteeAmout: "", //对外担保金额
        guaranteeBalance: "", //对外担保结余
        existBadRecord: 1, // 是否逾期 借款企业
        badRecordMsg: "", //  逾期及违约 不良影响
        oweTaxRecordNum: "", // 欠税记录
        civilJudgmentRecordNum: "", // 民事判决
        forceImpleRecordNum: "", // 强制执行记录
        administRecordNum: "", // 行政处罚记录

        creditChageMsg1: "", // 	借款企业 征信变化情况说明
        existCreditChage1: 0, // 借款企业 征信变化是否变化
        creditChageMsg2: "", // 	关联企业 征信变化情况说明
        existCreditChage2: 0, // 关联企业 征信变化是否变化
        creditChageMsg3: "", // 	法人保证人 征信变化情况说明
        existCreditChage3: 0 // 法人保证人 征信变化是否变化
      }
    },
    definite10: {
      creditInfo: {
        queryDateForCom: "",
        creditClassification: "",
        creditClassificationJur: "",
        // 企业实际控制人部分
        unPayOffLoanNumCon: "", //未结清贷款笔数
        unPayOffAmoutCon: "", // 未结清贷款金额
        finInstitutionNumCon: "", // 涉及金融机构
        sumBalanceCon: "", // 未结清贷款结余
        debitCardNumCon: "", //未销户贷记卡账户

        debitCardLineAmoutCon: "", //未销户贷记卡担保金额
        guaranteeNumCon: "", //对外担保笔数
        guaranteeAmoutCon: "", //对外担保金额
        guaranteeBalanceCon: "", //对外担保结余
        badRecordMsgCon: "", //  逾期及违约 不良影响
        existBadRecordCon: 1, // 逾期及违约 是否

        // 企业法定代表人部分
        unPayOffLoanNumJur: "", //未结清贷款笔数
        unPayOffAmoutJur: "", // 未结清贷款金额
        finInstitutionNumJur: "", // 涉及金融机构
        sumBalanceJur: "", // 未结清贷款结余
        debitCardNumJur: "", //未销户贷记卡账户

        debitCardLineAmoutJur: "", //授信总金额
        guaranteeNumJur: "", //对外担保笔数
        guaranteeAmoutJur: "", //对外担保金额
        guaranteeBalanceJur: "", //对外担保结余
        badRecordMsgJur: "", //  逾期及违约 不良影响
        existBadRecordJur: 1, //  逾期及违约 是否存在

        creditChageMsg4: "", // 企业实际控制人 征信变化情况说明
        existCreditChage4: 1, // 企业实际控制人 征信变化是否变化
        creditChageMsg5: "", // 企业法定代表人 征信变化情况说明
        existCreditChage5: 1, // 企业法定代表人 征信变化是否变化
        creditChageMsg6: "", // 企业其他保证人 征信变化情况说明
        existCreditChage6: "", // 企业其他保证人 征信变化是否变化
        creditChageMsg3: "", // 法人保证人 征信变化情况说明
        existCreditChage3: 1, // 法人保证人 征信变化是否变化

        RecentNegativeInformation: "",
        addedOverdues: false,
        pickerVisible: false
      }
    },
    credit89: {
      financeInfo: {
        financeClassification: "1", //1-加工制造类；2-贸易及其他
        colDebtBalance: "", //当前余额
        colDebtLastBalance: "", //应收票据上期检查（或调查）时点余额
        colDebtChang30Msg: "", // 应收票据变动超过30%，原因
        stockChangSitu: "", //存货上次全面检查或调查时余额
        stockLastBalance: "", //存货本次检查存货变动情况
        stockChang30Msg: "", // 存货变动超过30%，原因
        loanForPsonBalance: "", //私人借款当前余额
        loanForPsonLastBalance: "", //私人借款上期检查（或调查）时点余额
        loanForPsonChang30Msg: "", // 私人借款变动超过30%，原因
        payDebtBalance: "", //应付票据当前余额
        payDebtLastBalance: "", //应付票据上期检查（或调查）时点余额
        payDebtChang30Msg: "", // 应付票据变动超过30%，原因
        colCapitalBalance: "", //应收账款当前余额
        colCapitalLastBalance: "", //应收账款上期检查（或调查）时点余额
        colCapitalChang30Msg: "", // 应收账款变动超过30%，原因
        loanForBankBalance: "", //银行借款当前余额
        loanForBankLastBalance: "", //银行借款上期检查（或调查）时点余额
        loanForBankChang30Msg: "", // 银行借款变动超过30%，原因
        payCapitalBalance: "", //应收账款当前余额
        payCapitalLastBalance: "", //应收账款上期检查（或调查）时点余额
        payCapitalChang30Msg: "", // 应收账款变动超过30%，原因}
        busInc3MSitu: "", //营业收入近三个月的情况
        busIncChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
        dailyExpen3MSitu: "", //近三个月的情况
        dailyExpenChang30Msg: "", // 变动超过30%，原因
        emplCost3M: "", //近三个月的情况
        emplCostChang30Msg: "", // 变动超过30%，原因
        cash3M: "", //近三个月的情况
        cashChang30Msg: "", // 应收账款变动超过30%，原因
        materialCost3M: "", //营业收入近三个月的情况
        materialCostChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
        financeCost3M: "", //近三个月的情况
        financeCostChang30Msg: "", // 变动超过30%，原因
        payTaxAmout3M: "", //近三个月的情况
        payTaxAmoutChang30Msg: "", // 变动超过30%，原因
        profit3M: "", //近三个月的情况
        profitChang30Msg: "" // 应收账款变动超过30%，原因
        // busInc3MSitu: "", //营业收入近三个月的情况
        // busIncChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
        // emplCost3M: "", //近三个月的情况
        // emplCostChang30Msg: "", // 变动超过30%，原因
        // cash3M: "", //近三个月的情况
        // cashChang30Msg: "", // 变动超过30%，原因
        // profit3M: "", //近三个月的情况
        // profitChang30Msg: "", // 应收账款变动超过30%，原因
        // materialCost3M: "", //营业收入近三个月的情况
        // materialCostChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
        // financeCost3M: "", //近三个月的情况
        // financeCostChang30Msg: "", // 变动超过30%，原因
        // payTaxAmout3M: "", //近三个月的情况
        // payTaxAmoutChang30Msg: "" // 变动超过30%，原因
      }
    },
    definite6: {
      bizId: "",
      industrycChangSiut: 0, //企业所在行业是否发生重大不利变化
      planExpandSitu: 0, //企业是否有与主业无关的扩张计划
      hiddenTroubleSitu: 0, //生产经营是否存在安全隐患
      industrycChangSiutMsg: "", //企业所在行业是否发生重大不利变化具体情况
      planExpandSituMsg: "", //企业是否有与主业无关的扩张计划具体情况
      hiddenTroubleSituMsg: "", //生产经营是否存在安全隐患具体情况
      collEstimateDate: "", //上次抵质押物评估或重估日期
      collEstimateValue: "", //上次抵质押物评估或重估金额
      otherSitu: "" //其他情况
    },
    definite17: Object.assign({}, mVmodel(12), bizId),
    definite3: {
      existRisk: 1, // 是否存在风险预警信号
      riskMsg: "", // 预警信号说明
      suggest: "", // 建议
      empSign: "", // 签名
      bizId: ""
    }
  },
  m4: {
    newly9: {
      bizId: "",
      loanAmout: "", // 贷款金额
      loanLength: "", // 贷款期限
      repayKind: "", // 还款方式
      repayDate: "", // 还款日期
      repayAmout: "" // 还款金额
    },
    definite7: {
      bizId: "",
      stageData: []
    },
    processing4: {
      bizId: "",
      riskStage: "",
      riskMsg: "",
      suggest: "",
      existRisk: 0,
      empSign: "", // 签名
      imageList: []
    }
  },
  m5: {
    definite14: {
      bizId: "",
      payKind: "", // 贷款支付方式
      // repayKind: "", // 还款方式
      loanDate: "", // 还款日期
      loanPurpose: "", // 约定用途
      detailMsg4useAmout: "", // 资金使用情况详细说明
      useAmoutByContract: 1, //是否按合同约定的用途使用信贷资金
      executeCon: 1, //是否履行合同约定
      cooperate: 1, //对我行检查的态度
      cooperateMsg: "", // 其他
      msg: ""
    },
    definite16: Object.assign({}, mVmodel(11), bizId),
    definite3: {
      existRisk: 1, // 是否存在风险预警信号
      riskMsg: "", // 预警信号说明
      suggest: "", // 建议
      empSign: "", // 签名
      bizId: ""
    }
  },
  m6: {
    newly1: {
      revalOfColl: "",
      bizId: "",
      otherSecurityKindMsg: "",
      repayKind: "",
      checkAddr: "",
      checkModel: "", // 检查模式
      lineAmout: "", // 授信金额
      lineBalance: "", // 授信余额
      securityKind: "1", // 担保方式
      cooperate: 1, // 检查配合程度
      yearlyInspection: 1 // 额度年检
    },
    newly2: {
      assetCreditInfo: {
        queryDate: "",
        fiveClass: "", // 当前企业及实际控制人征信情况（注明征信查询分类结果)
        addedOverdues: 0, // 企业或企业主征信是否有新增逾期记录  客户资信检查
        addedOverduesMsg: "", // 当前企业及实际控制人征信情况 说明
        addedLoans: 0, // 企业或企业主是否有他行新增贷款  客户资信检查
        addedLoansMsg: "", // 企业或企业主是否有他行新增贷款情况 说明
        shrinkLoanScale: 0, // 企业或企业主是否有他行收缩贷款规模  客户资信检查
        shrinkLoanScaleMsg: "", // 企业或企业主是否有他行收缩贷款规模 说明
        addedGuarantees: 0, // 企业或企业主是否有新增对外担保记录  客户资信检查
        addedGuaranteesMsg: "", // 企业或企业主是否有新增对外担保记录 说明
        otherSitu: 0, // 企业或企业主是否有其他异常变化  客户资信检查
        otherSituMsg: "" // 企业或企业主是否有其他异常变化 说明
      },
      summaryForCheck: ""
    },
    newly3: {
      bizId: "",
      ownerStruSame: 0, // 企业实际股权结构是否与上述工商信息网查询一致
      ownerStruSameMsg: "", // 实际股权结构与工商信息网查询说明
      industrycChangSiut: 0, // 企业所在行业是否发生重大不利变化
      industrycChangSiutMsg: "", // 企业所在行业是否发生重大不利变化具体情况
      mainBusIsChanged: 0, // 企业主营业务情况是否发生变更
      mainBusIsChangedMsg: "", // 企业主营业务情况是否发生变更情况
      planExpandSitu: 0, // 企业是否有与主业无关的扩张计划
      planExpandSituMsg: "", // 企业是否有与主业无关的扩张计划具体情况
      addrIsChanged: 0, // 生产经营场所是否发生变化
      addrChangedMsg: "", // 生产经营场所变动情况
      hiddenTroubleSitu: 0, // 生产经营是否存在安全隐患
      hiddenTroubleSituMsg: "", // 生产经营是否存在安全隐患具体情况
      purchaseCost: 0, // 企业主要原材料或货物的采购成本是否明显上升
      purchaseCostMsg: "", // 企业主要原材料或货物的采购成本是否明显上升情况
      proAndOpeAbnormalSuit: 0, // 企业生产经营是否出现异常情况
      proAndOpeAbnormalSuitMsg: "", // 企业生产经营是否出现异常情况说明
      saleAbnormalSuit: 0, // 企业销售是否出现异常情况
      saleAbnormalSuitMsg: "", // 企业销售是否出现异常情况说明
      chainChange: 0, // 企业上下游核心客户是否发生重大变更
      chainChangeMsg: "", // 企业上下游核心客户发生重大变更说明
      dailyCostDecline: 0, // 制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降（降幅达30%）
      dailyCostDeclineMsg: "", // 制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降（降幅达30%）shuoming
      // orderDecline: 0, // 企业订单是否出现大幅下降（降幅达30%）
      // orderDeclinemsg: "", // 企业订单出现大幅下降（降幅达30%）说明
      cashLastToNow: "", // 上次检查（或调查）至本次检查期间的现金
      cashDecline: 0, // 剔除季节性因素后的现金流是否有大幅下降（降幅超30%）
      cashMatchesAndProAndOpe: 0, // 现金流与营业收入是否基本匹配
      cashOtherMsg: "", // 现金流其他说明
      summaryForCheck: "", // 检查要点小结
      otherSitu: "" // 其他情况
    },
    newly45: {
      bizId: "",
      // assitChangeSuit: "", //押品价值及变现能力变动情况
      assitOtherSuit: "", //押品其他情况
      summaryForAssit: "", //押品检查小结
      assitInfoForPledge: [],
      assitInfoForGuarantee: []
    },
    definite16: Object.assign({}, mVmodel(10), bizId),
    definite3: {
      existRisk: 1, // 是否存在风险预警信号
      riskMsg: "", // 预警信号说明
      suggest: "", // 建议
      empSign: "", // 签名
      bizId: ""
    }
  }
};

export { loanlnspection };
