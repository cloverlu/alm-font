import { mapGetters, mapActions } from "vuex";

//普遍用到的状态
export const normalMixin = {
  computed: {
    ...mapGetters(["nextFooter", "prevFooter", "bizType"])
  },
  methods: {
    ...mapActions(["setNextFooter", "setPrevFooter", "setBizType"]),
    // 判断下一步路由该去的页面
    footerRoute(currentType, currentName) {
      console.log(currentType);
      switch (currentType) {
        case "loanCreditFirst":
          switch (currentName) {
            case "creditFirstIndex":
              this.$router.push({ name: "firstDefinite2" });
              break;
            case "firstDefinite2":
              this.$router.push({ name: "firstDefinite16" });
              break;
            case "firstDefinite16":
              this.$router.push({ name: "firstDefinite3" });
          }
          break;
        case "loanCreditRoutine":
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
        case "loanDailyInspection":
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
        case "loanCreditOverall":
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
        case "loanRepaymentInspection":
          switch (currentName) {
            case "repaymentInspectionIndex":
              this.$router.push({ name: "repaymentInspectionDefinite7" });
              break;
            case "repaymentInspectionDefinite7":
              this.$router.push({ name: "processing4" });
          }
          break;
        case "loanFastCreditFirst":
          switch (currentName) {
            case "fastCreditFirstIndex":
              this.$router.push({ name: "fastCreditFirstDefinite16" });
              break;
            case "fastCreditFirstDefinite16":
              this.$router.push({ name: "fastCreditFirstDefinite3" });
          }
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
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};
