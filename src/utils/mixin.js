import { mapGetters, mapActions } from "vuex";
import { SaveEditModelBusiness, submitApprove } from "../api/loanlnspection";
import { unique, nowData } from "../utils/utils";

//普遍用到的状态
export const normalMixin = {
  computed: {
    ...mapGetters([
      "nextFooter",
      "prevFooter",
      "scrollToPo",
      "forBizDetail",
      "saveFlag",
      "queryDetail"
    ])
  },
  methods: {
    ...mapActions([
      "setNextFooter",
      "setPrevFooter",
      "setScrollToPo",
      "setforDizDetail",
      "setSaveFlag",
      "setqueryDetail"
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
    },
    //保存信息
    async infoSave(loanBusiness, currentName, type, tag) {
      let res = await SaveEditModelBusiness(this, loanBusiness);
      if (res.status === 200 && res.data.returnCode === "200000") {
        this.$Indicator.close();
        this.$Toast({
          message: "保存成功！",
          iconClass: "iconfont icongou-01",
          duration: 1000
        });

        // 保存saveFlag
        const pa = {
          bizId: this.$route.params.bizId,
          currentName: currentName,
          flag: true
        };
        const saveFlags = this.saveFlag;
        saveFlags.push(pa);
        this.setSaveFlag(unique(saveFlags, "currentName"));

        if (tag === "nextFooter") {
          setTimeout(() => {
            this.footerRoute(type, currentName, loanBusiness);
          }, 1200);
        }
      } else {
        this.$Toast({
          message: "保存失败！",
          iconClass: "iconfont iconcha-01",
          duration: 5000
        });
      }
    },
    // 提交审批页面的保存（opType: "0"）和提交（opType: "1"）
    async submit(params) {
      var message = "";
      if (params.opType === "0") {
        message = "保存";
      } else if (params.opType === "1") {
        message = "提交";
      }
      this.$Indicator.open();
      await submitApprove(this, params).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.$Indicator.close();
          this.$Toast({
            message: message + "成功！",
            iconClass: "iconfont icongou-01",
            duration: 1000
          });
          if (params.opType === "1") {
            setTimeout(() => {
              this.$router.push({ name: "loanInspectionIndex" });
            }, 1200);
          } else {
            setTimeout(() => {
              this.$MessageBox
                .confirm("回到列表页吗？")
                .then(action => {
                  if (action === "confirm") {
                    this.$router.push({ name: "loanInspectionIndex" });
                  }
                  if (action === "cancel") {
                    return false;
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }, 1200);
          }
        } else {
          this.$Indicator.close();
          this.$Toast({
            message: message + "失败！",
            iconClass: "iconfont iconcha-01",
            duration: 5000
          });
        }
      });
    },
    // mounted中需要判断是否走详情接口的内容
    mountedTag(flag, name) {
      if (flag === 1 || flag === "1") {
        this.setforDizDetail(this);
        this.params = this.forBizDetail(name);
        if (name === "processing4") {
          this.params2 = {
            pic_1s: this.forBizDetail(name).imageList
          };
        }
        console.log(this.forBizDetail(name));
        //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
        this.setScrollToPo({
          x: 0,
          y: 0,
          ratenum: Date.now(),
          tag: "nextFooter"
        });
        return false;
      } else {
        this.saveFlag.forEach(item => {
          if (item.currentName === name && item.flag === true) {
            this.setforDizDetail(this);
            this.params = this.forBizDetail(name);
            if (name === "processing4") {
              this.params2 = this.forBizDetail(name);
            }
            console.log(this.forBizDetail(name));
            //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
            this.setScrollToPo({
              x: 0,
              y: 0,
              ratenum: Date.now(),
              tag: "nextFooter"
            });
            return false;
          }
        });
      }
    },
    // 图像模块匹配
    mVmodel(num) {
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
    },
    // promise
    promiseFun(url, params) {
      return new Promise((resolve, reject) => {
        url(this, params).then(
          res => {
            if (res.status === 200 && res.data.returnCode === "200000") {
              console.log(res);
              resolve(res);
            }
          },
          err => {
            reject(err.json());
          }
        );
      });
    },
    // 照片保存与保存审批页面同时存在，用promise all，只要一个失败即失败
    bindSave(params, params2) {
      let appreove = this.promiseFun(submitApprove, params);
      let editSave = this.promiseFun(SaveEditModelBusiness, params2);
      var message = "";
      if (params.opType === "0") {
        message = "保存";
      } else if (params.opType === "1") {
        message = "提交";
      }

      // 使用 Promise.all()
      Promise.all([appreove, editSave])
        .then(res => {
          this.$Indicator.close();
          this.$Toast({
            message: message + "成功！",
            iconClass: "iconfont icongou-01",
            duration: 1000
          });
          if (params.opType === "1") {
            setTimeout(() => {
              this.$router.push({ name: "loanInspectionIndex" });
            }, 1200);
          } else {
            setTimeout(() => {
              this.$MessageBox
                .confirm("回到列表页吗？")
                .then(action => {
                  if (action === "confirm") {
                    this.$router.push({ name: "loanInspectionIndex" });
                  }
                  if (action === "cancel") {
                    return false;
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }, 1200);
          }
        })
        .catch(err => {
          this.$Indicator.close();
          this.$Toast({
            message: message + "失败！",
            iconClass: "iconfont iconcha-01",
            duration: 5000
          });
        });
    }
  }
};

// 贷后检查
//m1 loanInsM1
export const loanInsM1 = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
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
    ...mapGetters(["addmore", "approveDetail", "handleParams"])
  },
  methods: {
    ...mapActions(["setAddmore", "setApproveDetail", "setHandleParams"])
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
