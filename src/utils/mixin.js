import { mapGetters, mapActions } from 'vuex'
import { SaveEditModelBusiness, submitApprove } from '../api/loanlnspection'
import { unique } from '../utils/utils'

//普遍用到的状态
export const normalMixin = {
  computed: {
    ...mapGetters([
      'nextFooter',
      'prevFooter',
      'scrollToPo',
      'forBizDetail',
      'saveFlag',
      'queryDetail',
      'tranSactName1',
      'flagSava45',
    ]),
  },
  methods: {
    ...mapActions([
      'setNextFooter',
      'setPrevFooter',
      'setScrollToPo',
      'setforDizDetail',
      'setSaveFlag',
      'setqueryDetail',
      'setTranSactName1',
      'setSaveFlag45',
    ]),
    // 判断下一步路由该去的页面
    footerRoute(currentType, currentName, params) {
      switch (currentType) {
        //m1
        case 'm1':
          switch (currentName) {
            case 'creditFirstIndex':
              // this.setm1Definite1({ params: params });
              this.$router.push({ name: 'firstDefinite2' })
              break
            case 'firstDefinite2':
              // this.setm1Definite2({ params: params });
              this.$router.push({ name: 'firstDefinite16' })
              break
            case 'firstDefinite16':
              // this.setm1Definite16({ params: params });
              this.$router.push({ name: 'firstDefinite3' })
          }
          break
        //m2
        case 'm2':
          switch (currentName) {
            case 'creditRoutineIndex':
              this.$router.push({ name: 'definite13' })
              break
            case 'definite13':
              this.$router.push({ name: 'definite11' })
              break
            case 'definite11':
              this.$router.push({ name: 'definite10' })
              break
            case 'definite10':
              this.$router.push({ name: 'definite5' })
              break
            case 'definite5':
              this.$router.push({ name: 'routineDefinite18' })
              break
            case 'routineDefinite18':
              this.$router.push({ name: 'routineDefinite3' })
          }

          break
        //类型6
        case 'm6':
          switch (currentName) {
            case 'dailyInspectionIndex':
              this.$router.push({ name: 'newly2' })
              break
            case 'newly2':
              this.$router.push({ name: 'newly3' })
              break
            case 'newly3':
              this.$router.push({ name: 'newly45' })
              break
            case 'newly45':
              this.$router.push({ name: 'newly6' })
              break
            case 'newly6':
              this.$router.push({ name: 'newlyDefinite16' })
              break
            case 'newlyDefinite16':
              this.$router.push({ name: 'newlyDefinite3' })
          }
          break
        //类型3
        case 'm3':
          switch (currentName) {
            case 'creditOverallIndex':
              this.$router.push({ name: 'overalltDefinite13' })
              break
            case 'overalltDefinite13':
              this.$router.push({ name: 'overalltDefinite11' })
              break
            case 'overalltDefinite11':
              this.$router.push({ name: 'overalltDefinite10' })
              break
            case 'overalltDefinite10':
              this.$router.push({ name: 'overalltDefinite89' })
              break
            case 'overalltDefinite89':
              this.$router.push({ name: 'overalltDefinite6' })
              break
            case 'overalltDefinite6':
              this.$router.push({ name: 'overalltDefinite17' })
              break
            case 'overalltDefinite17':
              this.$router.push({ name: 'overalltDefinite3' })
          }
          break
        // 类型4
        case 'm4':
          switch (currentName) {
            case 'repaymentInspectionIndex':
              this.$router.push({ name: 'repaymentInspectionDefinite7' })
              break
            case 'repaymentInspectionDefinite7':
              this.$router.push({ name: 'processing4' })
          }
          break
        //类型5
        case 'm5':
          switch (currentName) {
            case 'fastCreditFirstIndex':
              this.$router.push({ name: 'fastCreditFirstDefinite16' })
              break
            case 'fastCreditFirstDefinite16':
              this.$router.push({ name: 'fastCreditFirstDefinite3' })
          }
      }
    },
    //类型对应
    bizType(item, type) {
      switch (type) {
        case 'm1':
          item.bizTypeName = '小企业授信业务首次跟踪检查'
          break
        case 'm2':
          item.bizTypeName = '小企业授信业务贷后例行检查'
          break
        case 'm3':
          item.bizTypeName = '小企业授信业务贷后全面检查'
          break
        case 'm4':
          item.bizTypeName = '小企业授信业务还款资金落实情况检查'
          break
        case 'm5':
          item.bizTypeName = '小企业法人快捷贷首次检查'
          break
        case 'm6':
          item.bizTypeName = '小企业法人快捷贷贷后日常检查'
      }
    },
    //保存信息
    async infoSave(loanBusiness, currentName, type, tag) {
      let res = await SaveEditModelBusiness(this, loanBusiness)
      if (res.status === 200 && res.data.returnCode === '200000') {
        this.$Indicator.close()
        this.$Toast({
          message: '保存成功！',
          iconClass: 'iconfont icongou-01',
          duration: 1000,
        })
        if (currentName === 'newly45') {
          this.setSaveFlag45({
            saveFlag: true,
            bizId: this.$route.params.bizId,
            tag: Date.now(),
          })
        }
        // 保存saveFlag
        const pa = {
          bizId: this.$route.params.bizId,
          currentName: currentName,
          flag: true,
          uniqueTag: this.$route.params.bizId + currentName,
        }
        const saveFlags = this.saveFlag
        saveFlags.push(pa)
        this.setSaveFlag(unique(saveFlags, 'uniqueTag'))

        if (tag === 'nextFooter') {
          // this.footerRoute(type, currentName, loanBusiness);
          setTimeout(() => {
            this.footerRoute(type, currentName, loanBusiness)
          }, 1100)
        }
      } else {
        this.$Indicator.close()
        this.$Toast({
          message: res.data.returnMsg,
          iconClass: 'iconfont iconcha-01',
          duration: 5000,
        })
      }
    },
    // 提交审批页面的保存（opType: "0"）和提交（opType: "1"）
    async submit(params, currentName) {
      var message = ''
      if (params.opType === '0') {
        message = '保存'
      } else if (params.opType === '1') {
        message = '提交'
      }
      this.$Indicator.open()
      await submitApprove(this, params).then((res) => {
        if (res.status === 200 && res.data.returnCode === '200000') {
          this.$Indicator.close()
          if (params.opType === '0') {
            const pa = {
              bizId: this.$route.params.bizId,
              currentName: currentName,
              flag: true,
              uniqueTag: this.$route.params.bizId + currentName,
            }
            const saveFlags = this.saveFlag
            saveFlags.push(pa)
            this.setSaveFlag(unique(saveFlags, 'uniqueTag'))
          } else if (params.opType === '1') {
            this.saveFlag.map((item, index) => {
              if (item.bizId === params.bizId) {
                this.saveFlag.splice(index, 1)
              }
            })
          }
          // 保存saveFlag

          this.$Toast({
            message: message + '成功！',
            iconClass: 'iconfont icongou-01',
            duration: 1000,
          })
          if (params.opType === '1') {
            setTimeout(() => {
              this.$router.push({ name: 'loanInspectionIndex' })
            }, 1200)
          } else {
            setTimeout(() => {
              this.$MessageBox
                .confirm('回到列表页吗？')
                .then((action) => {
                  if (action === 'confirm') {
                    this.$router.push({ name: 'loanInspectionIndex' })
                  }
                  if (action === 'cancel') {
                    return false
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }, 1200)
          }
        } else {
          this.$Indicator.close()
          this.$Toast({
            message: message + '失败！',
            iconClass: 'iconfont iconcha-01',
            duration: 5000,
          })
        }
      })
    },
    // mounted中需要判断是否走详情接口的内容
    async mountedTag(flag, name, bizId) {
      if (
        flag === 1 ||
        flag === '1' ||
        this.tranSactName1.tranSactName1 === true
      ) {
        await this.setforDizDetail(this)
        this.params = this.forBizDetail(name)
        if (name === 'processing4') {
          this.params2 = {
            pic_1s: this.forBizDetail(name).imageList,
          }
        } else if (name === 'overalltDefinite89') {
          this.value = this.params.financeClassification
          if (this.params.financeClassification === '1') {
            this.params8 = this.params
            this.params9 = {}
          } else if (this.params.financeClassification === '2') {
            this.params9 = this.params
            this.params8 = {}
          }
        } else if (name === 'repaymentInspectionDefinite7') {
          if (this.params.stageData) {
            var a = ''
            if (this.params.stageData && this.params.stageData[0]) {
              const type = this.params.stageData[0].checkStage
              switch (type) {
                case '1':
                  a = '一'
                  break
                case '2':
                  a = '二'
                  break
                case '3':
                  a = '三'
                  break
              }
              this.result = a
            }
          }
          this.stageData = this.params.stageData
        }
        console.log(this.forBizDetail(name))
      } else {
        this.saveFlag.forEach(async (item) => {
          if (
            item.currentName === name &&
            item.bizId === bizId &&
            item.flag === true
          ) {
            await this.setforDizDetail(this)
            this.params = this.forBizDetail(name)
            if (name === 'processing4') {
              this.params2 = {
                pic_1s: this.forBizDetail(name).imageList,
              }
            } else if (name === 'overalltDefinite89') {
              this.value = this.params.financeClassification
              if (this.params.financeClassification === '1') {
                this.params8 = this.params
                this.params9 = {}
              } else if (this.params.financeClassification === '2') {
                this.params9 = this.params
                this.params8 = {}
              }
            } else if (name === 'repaymentInspectionDefinite7') {
              if (this.params.stageData) {
                var a = ''
                if (this.params.stageData && this.params.stageData[0]) {
                  const type = this.params.stageData[0].checkStage
                  switch (type) {
                    case '1':
                      a = '一'
                      break
                    case '2':
                      a = '二'
                      break
                    case '3':
                      a = '三'
                      break
                  }
                  this.result = a
                }
              }
            }
            console.log(this.forBizDetail(name))
          }
        })
      }

      //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
      this.setScrollToPo({
        x: 0,
        y: 0,
        ratenum: Date.now(),
        tag: 'nextFooter',
      })
    },
    // 图像模块匹配
    mVmodel(num) {
      const definite16 = {}
      for (let i = 0; i < num; i++) {
        const a = `pic_${i + 1}s`
        definite16[a] = [
          {
            url: ``,
            longitude: '',
            dimension: '',
          },
        ]
      }
      return definite16
    },
    // promise
    promiseFun(url, params) {
      return new Promise((resolve, reject) => {
        url(this, params).then(
          (res) => {
            if (res.status === 200 && res.data.returnCode === '200000') {
              console.log(res)
              resolve(res)
            }
          },
          (err) => {
            reject(err.json())
          }
        )
      })
    },
    // 照片保存与保存审批页面同时存在，用promise all，只要一个失败即失败
    bindSave(params, params2, moduleName) {
      let appreove = this.promiseFun(submitApprove, params)
      let editSave = this.promiseFun(SaveEditModelBusiness, params2)
      var message = ''
      if (params.opType === '0') {
        message = '保存'
      } else if (params.opType === '1') {
        message = '提交'
      }

      // 使用 Promise.all()
      Promise.all([appreove, editSave])
        .then((res) => {
          this.$Indicator.close()
          this.$Toast({
            message: message + '成功！',
            iconClass: 'iconfont icongou-01',
            duration: 1000,
          })
          if (params.opType === '1') {
            setTimeout(() => {
              if (moduleName === 'custmer') {
                this.$router.push({ name: 'userIndex' })
              } else {
                this.$router.push({ name: 'loanInspectionIndex' })
              }
            }, 1200)
          } else {
            setTimeout(() => {
              this.$MessageBox
                .confirm('回到列表页吗？')
                .then((action) => {
                  if (action === 'confirm') {
                    if (moduleName === 'custmer') {
                      this.$router.push({ name: 'userIndex' })
                    } else {
                      this.$router.push({ name: 'loanInspectionIndex' })
                    }
                  }
                  if (action === 'cancel') {
                    return false
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }, 1200)
          }
        })
        .catch((err) => {
          this.$Indicator.close()
          this.$Toast({
            message: message + '失败！',
            iconClass: 'iconfont iconcha-01',
            duration: 5000,
          })
        })
    },
  },
}

//业务审批
export const approvalMixin = {
  computed: {
    ...mapGetters(['addmore', 'approveDetail', 'handleParams']),
  },
  methods: {
    ...mapActions(['setAddmore', 'setApproveDetail', 'setHandleParams']),
  },
}

// 用户管理
export const userMixin = {
  computed: {
    ...mapGetters(['userBizType', 'userBizId', 'userForBizDetail']),
    vuexBizId() {
      if (!this.$route.params.bizId && !this.uBizId) {
        var bizId
        const allTag = this.userBizType.bizType + this.$route.params.billNo
        this.userBizId.map((item) => {
          if (item.allTag === allTag) {
            bizId = item.bizId
          }
        })
      }
      return bizId
    },
  },
  methods: {
    ...mapActions(['setBizType', 'setUserBizId', 'setUserforDizDetail']),
    // user判断下一步路由该去的页面
    footerUserRoute(currentType, currentName) {
      switch (currentType) {
        //m1
        case 'm1':
          switch (currentName) {
            case 'definiteUserAll':
              this.$router.push({ name: 'userFirstDefinite2' })
              break
            case 'userFirstDefinite2':
              this.$router.push({ name: 'userFirstDefinite16' })
              break
            case 'userFirstDefinite16':
              this.$router.push({ name: 'userFirstDefinite3' })
          }
          break
        //m2
        case 'm2':
          switch (currentName) {
            case 'definiteUserAll':
              this.$router.push({ name: 'userRoutineDefinite13' })
              break
            case 'userRoutineDefinite13':
              this.$router.push({ name: 'userRoutineDefinite11' })
              break
            case 'userRoutineDefinite11':
              this.$router.push({ name: 'userRoutineDefinite10' })
              break
            case 'userRoutineDefinite10':
              this.$router.push({ name: 'userRoutineDefinite5' })
              break
            case 'userRoutineDefinite5':
              this.$router.push({ name: 'userRoutineDefinite18' })
              break
            case 'userRoutineDefinite18':
              this.$router.push({ name: 'userRoutineDefinite3' })
          }

          break
        //类型6
        case 'm6':
          switch (currentName) {
            case 'definiteUserAll':
              this.$router.push({ name: 'userNewly2' })
              break
            case 'userNewly2':
              this.$router.push({ name: 'userNewly3' })
              break
            case 'userNewly3':
              this.$router.push({ name: 'userNewly45' })
              break
            case 'userNewly45':
              this.$router.push({ name: 'userNewlyDefinite16' })
              break
            case 'userNewlyDefinite16':
              this.$router.push({ name: 'userNewly6' })
              break
            case 'userNewly6':
              this.$router.push({ name: 'userNewlyDefinite3' })
          }
          break
        //类型3
        case 'm3':
          switch (currentName) {
            case 'definiteUserAll':
              this.$router.push({ name: 'userOveralltDefinite13' })
              break
            case 'userOveralltDefinite13':
              this.$router.push({ name: 'userOveralltDefinite11' })
              break
            case 'userOveralltDefinite11':
              this.$router.push({ name: 'userOveralltDefinite10' })
              break
            case 'userOveralltDefinite10':
              this.$router.push({ name: 'userOveralltDefinite89' })
              break
            case 'userOveralltDefinite89':
              this.$router.push({ name: 'userOveralltDefinite6' })
              break
            case 'userOveralltDefinite6':
              this.$router.push({ name: 'userOveralltDefinite17' })
              break
            case 'userOveralltDefinite17':
              this.$router.push({ name: 'userOveralltDefinite3' })
          }
          break
        // 类型4
        case 'm4':
          switch (currentName) {
            case 'definiteUserAll':
              this.$router.push({ name: 'userReInsDefinite7' })
              break
            case 'userReInsDefinite7':
              this.$router.push({ name: 'userReInsProcessing4' })
          }
          break
        //类型5
        case 'm5':
          switch (currentName) {
            case 'definiteUserAll':
              this.$router.push({ name: 'userFastCreDefinite16' })
              break
            case 'userFastCreDefinite16':
              this.$router.push({ name: 'userFastCreDefinite3' })
          }
      }
    },
    //保存信息
    async userInfoSave(loanBusiness, currentName, type, tag) {
      let res = await SaveEditModelBusiness(this, loanBusiness)
      if (res.status === 200 && res.data.returnCode === '200000') {
        this.$Indicator.close()
        this.$Toast({
          message: '保存成功！',
          iconClass: 'iconfont icongou-01',
          duration: 1000,
        })

        //setUserBizId
        const pa = {
          bizId: res.data.bizId,
          billNo: this.$route.params.billNo,
          bizType: type,
          currentName: currentName,
          allTag: type + this.$route.params.billNo,
          uniqueTag: type + this.$route.params.billNo + currentName,
        }

        const userBizId = this.userBizId
        userBizId.push(pa)
        this.setUserBizId(unique(userBizId, 'uniqueTag'))

        if (tag === 'nextFooter') {
          setTimeout(() => {
            this.footerUserRoute(type, currentName, loanBusiness)
          }, 1200)
        }
      } else {
        this.$Indicator.close()
        this.$Toast({
          message: res.data.returnMsg,
          iconClass: 'iconfont iconcha-01',
          duration: 5000,
        })
      }
    },
    // mounted操作
    // mounted中需要判断是否走详情接口的内容
    userMountedTag(type, billNo, name) {
      const uniquetag = type + billNo + name
      this.userBizId.map(async (item) => {
        if (item.uniqueTag === uniquetag) {
          await this.setUserforDizDetail(this)
          const params = this.userForBizDetail(name, type)

          if (name === 'userReInsProcessing4') {
            this.params2 = {
              pic_1s: params.imageList,
            }
          } else if (name === 'userOveralltDefinite89') {
            this.value = params.financeClassification
            if (params.financeClassification === '1') {
              this.params8 = params
              this.params9 = {}
            } else if (params.financeClassification === '2') {
              this.params9 = params
              this.params8 = {}
            }
          } else if (name === 'userReInsDefinite7') {
            if (params.stageData) {
              var a = ''
              if (params.stageData && params.stageData[0]) {
                const type = params.stageData[0].checkStage
                switch (type) {
                  case '1':
                    a = '一'
                    break
                  case '2':
                    a = '二'
                    break
                  case '3':
                    a = '三'
                    break
                }
                this.result = a
              }
            }
          }
          this.params = params

          console.log(this.params)
        }
      })
      //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
      this.setScrollToPo({
        x: 0,
        y: 0,
        ratenum: Date.now(),
        tag: 'nextFooter',
      })
    },
    // 提交审批页面的保存（opType: "0"）和提交（opType: "1"）
    async userSubmit(params, type, currentName) {
      var message = ''
      if (params.opType === '0') {
        message = '保存'
      } else if (params.opType === '1') {
        message = '提交'
      }
      this.$Indicator.open()
      await submitApprove(this, params).then((res) => {
        if (res.status === 200 && res.data.returnCode === '200000') {
          this.$Indicator.close()

          //setUserBizId
          const pa = {
            bizId: res.data.bizId,
            billNo: this.$route.params.billNo,
            bizType: type,
            currentName: currentName,
            allTag: type + this.$route.params.billNo,
            uniqueTag: type + this.$route.params.billNo + currentName,
          }

          const userBizId = this.userBizId
          userBizId.push(pa)
          this.setUserBizId(unique(userBizId, 'uniqueTag'))

          this.$Toast({
            message: message + '成功！',
            iconClass: 'iconfont icongou-01',
            duration: 1000,
          })
          if (params.opType === '1') {
            setTimeout(() => {
              this.$router.push({ name: 'userIndex' })
            }, 1200)
          } else {
            setTimeout(() => {
              this.$MessageBox
                .confirm('回到列表页吗？')
                .then((action) => {
                  if (action === 'confirm') {
                    this.$router.push({ name: 'userIndex' })
                  }
                  if (action === 'cancel') {
                    return false
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }, 1200)
          }
        } else {
          this.$Indicator.close()
          this.$Toast({
            message: message + '失败！',
            iconClass: 'iconfont iconcha-01',
            duration: 5000,
          })
        }
      })
    },
  },
}
