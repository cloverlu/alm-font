import { mapGetters, mapActions } from "vuex";

//普遍用到的状态
export const normalMixin = {
  computed: {
    ...mapGetters([
      "nextFooter",
      "prevFooter",
      "scrollToPo",
      "forBizDetail",
      "saveFlag"
    ])
  },
  methods: {
    ...mapActions([
      "setNextFooter",
      "setPrevFooter",
      "setScrollToPo",
      "setforDizDetail",
      "setSaveFlag"
    ]),
    // 判断下一步路由该去的页面
    footerRoute(currentType, currentName, params) {
      switch (currentType) {
        //m1
        case "m1":
          switch (currentName) {
            case "creditFirstIndex":
              // this.setm1Definite1({ params: params });
              this.$router.push({ name: "firstDefinite2" });
              break;
            case "firstDefinite2":
              // this.setm1Definite2({ params: params });
              this.$router.push({ name: "firstDefinite16" });
              break;
            case "firstDefinite16":
              // this.setm1Definite16({ params: params });
              this.$router.push({ name: "firstDefinite3" });
          }
          break;
        //m2
        case "m2":
          switch (currentName) {
            case "creditRoutineIndex":
              this.$router.push({ name: "definite13" });
              break;
            case "definite13":
              this.$router.push({ name: "definite11" });
              break;
            case "definite11":
              this.$router.push({ name: "definite10" });
              break;
            case "definite10":
              this.$router.push({ name: "definite5" });
              break;
            case "definite5":
              this.$router.push({ name: "routineDefinite18" });
              break;
            case "routineDefinite18":
              this.$router.push({ name: "routineDefinite3" });
          }

          break;
        //类型6
        case "m6":
          switch (currentName) {
            case "dailyInspectionIndex":
              this.$router.push({ name: "newly2" });
              break;
            case "newly2":
              this.$router.push({ name: "newly3" });
              break;
            case "newly3":
              this.$router.push({ name: "newly45" });
              break;
            case "newly45":
              this.$router.push({ name: "newlyDefinite16" });
              break;
            case "newlyDefinite16":
              this.$router.push({ name: "newlyDefinite3" });
          }
          break;
        //类型3
        case "m3":
          switch (currentName) {
            case "creditOverallIndex":
              this.$router.push({ name: "overalltDefinite13" });
              break;
            case "overalltDefinite13":
              this.$router.push({ name: "overalltDefinite11" });
              break;
            case "overalltDefinite11":
              this.$router.push({ name: "overalltDefinite10" });
              break;
            case "overalltDefinite10":
              this.$router.push({ name: "overalltDefinite89" });
              break;
            case "overalltDefinite89":
              this.$router.push({ name: "overalltDefinite6" });
              break;
            case "overalltDefinite6":
              this.$router.push({ name: "overalltDefinite17" });
              break;
            case "overalltDefinite17":
              this.$router.push({ name: "overalltDefinite3" });
          }
          break;
        // 类型4
        case "m4":
          switch (currentName) {
            case "repaymentInspectionIndex":
              this.$router.push({ name: "repaymentInspectionDefinite7" });
              break;
            case "repaymentInspectionDefinite7":
              this.$router.push({ name: "processing4" });
          }
          break;
        //类型5
        case "m5":
          switch (currentName) {
            case "fastCreditFirstIndex":
              this.$router.push({ name: "fastCreditFirstDefinite16" });
              break;
            case "fastCreditFirstDefinite16":
              this.$router.push({ name: "fastCreditFirstDefinite3" });
          }
      }
    },
    //类型对应
    bizType(item, type) {
      switch (type) {
        case "m1":
          item.bizTypeName = "小企业授信业务首次跟踪检查";
          break;
        case "m2":
          item.bizTypeName = "小企业授信业务贷后例行检查";
          break;
        case "m3":
          item.bizTypeName = "小企业授信业务贷后全面检查";
          break;
        case "m4":
          item.bizTypeName = "小企业授信业务还款资金落实情况检查";
          break;
        case "m5":
          item.bizTypeName = "小企业法人快捷贷首次检查";
          break;
        case "m6":
          item.bizTypeName = "小企业法人快捷贷贷后日常检查";
      }
    }
  }
};

// 贷后检查
//m1 loanInsM1
export const loanInsM1 = {
  computed: {
    ...mapGetters(["m1Definite1", "m1Definite2", "m1Definite16", "m1Definite3"])
  },
  methods: {
    ...mapActions([
      "setm1Definite1",
      "setm1Definite2",
      "setm1Definite16",
      "setm1Definite3"
    ])
  }
};
//m2 loanInsM2
export const loanInsM2 = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};

//m3 loanInsM3
export const loanInsM3 = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};

//m4 loanInsM4
export const loanInsM4 = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};

//m5 loanInsM5
export const loanInsM5 = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};
//m6 loanInsM6
export const loanInsM6 = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};

//业务审批
export const approvalMixin = {
  computed: {
    ...mapGetters(["addmore"])
  },
  methods: {
    ...mapActions(["setAddmore"])
  }
};

// 用户管理
export const userMixin = {
  computed: {
    ...mapGetters(["bizType"])
  },
  methods: {
    ...mapActions(["setBizType"])
  }
};
