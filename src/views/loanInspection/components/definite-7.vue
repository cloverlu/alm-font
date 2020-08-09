<!--
 * @Descripttion: 检查申请明细7
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite7">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coName">检查阶段</span>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="检查阶段选择"
                           name="1">
          <van-radio-group v-model="result">
            <van-cell-group>
              <van-cell v-for="(item, index) in list"
                        clickable
                        :key="item"
                        :title="`第${item}阶段`"
                        @click="toggle(index)">
                <template #right-icon>
                  <van-radio :name="item"
                             ref="checkboxes" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </van-collapse-item>
      </van-collapse>
      <div class="definite7-wrapper">
        <div class="type1"
             v-for="(item, i) in params.stageData"
             :key="item.checkStage">
          <div class="formTitle1">
            <span class="coName"
                  v-if="item.checkStage === '1'">第一阶段</span>
            <span class="coName"
                  v-if="item.checkStage === '2'">第二阶段</span>
            <span class="coName"
                  v-if="item.checkStage === '3'">第三阶段</span>
          </div>
          <div class="item1">
            <span class="tag1">还款意愿</span>
            <almSelect :selectData="payIntentionsArr"
                       :defaultValue="item.payIntention"
                       :triggerId="payIntention(item.checkStage)"
                       :title="selectTitle"
                       :fontColor="fontColor"
                       @getSelectValue="getSelect(arguments, item.checkStage)"
                       class="info"></almSelect>
            <span class="iconfont iconxiala arrow"></span>
          </div>
          <mt-field class="textFiled"
                    label="检查地点"
                    placeholder="请输入"
                    v-model="item.practicableCheckAddr"></mt-field>
          <mt-field class="textFiled"
                    label="接待人员"
                    placeholder="请输入"
                    v-model="item.practicableStaff"></mt-field>
          <mt-field class="textFiled"
                    label="还款资金来源"
                    placeholder="请输入"
                    v-model="item.amoutSource"></mt-field>
          <div class="definite-field">
            <div class="item">
              <span class="tag big">
                预计还款/付息时间
              </span>
              <span class="info"
                    @click="timepickerVisible(item.checkStage)">
                <input v-model="item.expectRepayDate"
                       type="input"
                       class="field-input"
                       placeholder="请输入"
                       :disabled="true" />
              </span>
            </div>
          </div>
          <mt-datetime-picker :ref="'picker' + item.checkStage"
                              type="date"
                              v-model="timePicker[i].timeP"
                              @confirm="handleConfirm(item.checkStage, i)"></mt-datetime-picker>

          <!-- <van-cell title="还款资金落实情况说明" class="cellTitle" /> -->
          <div class="msg">还款资金落实情况说明</div>
          <mt-field type="textarea"
                    rows="3"
                    v-model="item.practicableMsg"
                    class="text"
                    style="overflow:hidden"
                    placeholder="请输入"></mt-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { payIntentionsArr } from "../../../utils/dataMock";
import imageUpload from "../components/imageUpload";
import { Field } from "mint-ui";
import { DatetimePicker } from "mint-ui";
import { formatDate, getLastYearYestdy } from "@/utils/utils";
import { normalMixin, userMixin } from "../../../utils/mixin";
import {
  Collapse,
  CollapseItem,
  Radio,
  RadioGroup,
  Cell,
  CellGroup
} from "vant";
import almSelect from "../components/select";
export default {
  components: {
    "van-cell": Cell,
    "van-cell-group": CellGroup,
    "van-radio": Radio,
    "van-radio-group": RadioGroup,
    "mt-field": Field,
    "van-collapse": Collapse,
    "van-collapse-item": CollapseItem,
    almSelect,
    "mt-datetime-picker": DatetimePicker
  },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data () {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      popupVisible: false,
      pickerValue: "",
      payType: 1,
      selectTitle: "还款意愿",
      fontColor: "blue",
      payIntentionsArr: payIntentionsArr,
      payIntention1: "payIntention1",
      payIntention2: "payIntention2",
      payIntention3: "payIntention3",
      activeNames: ["1"],
      timePicker: [
        {
          timeP: new Date()
        },
        {
          timeP: new Date()
        },
        {
          timeP: new Date()
        }
      ],
      startDate: new Date(getLastYearYestdy(new Date())),
      endDate: new Date(),
      list: ["一", "二", "三"],
      result: "",
      first: true,
      second: false,
      three: false,
      params: {
        stageData: [
          // 还款资金落实阶段数组
          // {
          //   checkStage: "1", // 检查阶段
          //   payIntention: "1", // 还款意愿
          //   practicableCheckAddr: "", // 检查地点
          //   practicableStaff: "", // 接待人员
          //   amoutSource: "", // 还款资金来源
          //   expectRepayDate: "", // 预计还款/付息时间
          //   practicableMsg: "" // 还款资金落实情况说明
          // }
        ]
      },
      loanBusiness: {},
      stageData: []
    };
  },
  mounted () {
    const moduleName = this.$route.params.moduleName;
    const name = this.$route.name;
    const type = this.userBizType.bizType;
    // 上一步下一步需要走的详情接口
    if (moduleName === "custmer") {
      const billNo = this.$route.params.billNo;
      if (this.bizId) {
        this.userMountedTag(type, billNo, name);

      }
    } else {
      const flag = this.$route.params.saveFlag;
      this.mountedTag(flag, name, this.$route.params.bizId);
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter (val, oldval) {
      if (val !== oldval) {
        this.loanBusiness = this.params;
      }
    }
  },
  methods: {
    payIntention (index) {
      return `payIntention1${index}`;
    },
    getSelect (data, checkStage) {
      this.params.stageData.forEach(item => {
        if (item.checkStage === checkStage) {
          item.payIntention = data[0][0].key;
        }
      });
    },
    //时间界面调出
    timepickerVisible (checkStage) {
      this.$refs[`picker${checkStage}`][0].open();
    },
    // 选定时间确定
    handleConfirm (checkStage, i) {
      // console.log(this.timePicker[i].timeP);
      this.params.stageData.forEach(item => {
        if (item.checkStage === checkStage) {
          if (!this.timePicker[i].timeP) {
            // item.expectRepayDate = formatDate(this.endDate);
            this.$set(item, 'expectRepayDate', formatDate(this.endDate))
          } else {
            // item.expectRepayDate = formatDate(this.timePicker[i].timeP);
            this.$set(item, 'expectRepayDate', formatDate(this.timePicker[i].timeP))
          }
        }
      });
      this.$refs[`picker${checkStage}`][0].close();
    },

    toggle (index) {
      var checkStage = "";
      if (index == 0) {
        checkStage = "1";
        this.result = "一";
      } else if (index == 1) {
        checkStage = "2";
        this.result = "二";
      } else if (index == 2) {
        checkStage = "3";
        this.result = "三";
      }

			var item = {}
      if (this.stageData && this.stageData.length > 0 ) {
				if(this.stageData[0].checkStage !== checkStage){
					item = {
						checkStage: checkStage, // 检查阶段
						payIntention: "1", // 还款意愿
						practicableCheckAddr: "", // 检查地点
						practicableStaff: "", // 接待人员
						amoutSource: "", // 还款资金来源
						expectRepayDate: "", // 预计还款/付息时间
						practicableMsg: "" // 还款资金落实情况说明
					};
				} else {
					item = this.stageData[0]
				}
				
			}else{
				item = {
					checkStage: checkStage, // 检查阶段
					payIntention: "1", // 还款意愿
					practicableCheckAddr: "", // 检查地点
					practicableStaff: "", // 接待人员
					amoutSource: "", // 还款资金来源
					expectRepayDate: "", // 预计还款/付息时间
					practicableMsg: "" // 还款资金落实情况说明
				};

			}
			this.params.stageData = [];
			this.params.stageData.push(item);
        


    },
    change () {
      this.$refs.checkboxes[0].checked = true;
    },
    //数组排序
    sortId (a, b) {
      return parseInt(a.checkStage) - parseInt(b.checkStage);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.definite7 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .definite-field {
    .item {
      border-bottom: none !important;
    }
  }
  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    background-color: #f7f7f7;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(14);
      top: 50%;
      left: px2rem(18);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: 100%;
      line-height: px2rem(15);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
    .coNameBlack {
      position: absolute;
      display: inline-block;
      height: px2rem(23);
      width: 100%;
      line-height: px2rem(20);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(113, 113, 113, 1);
      opacity: 1;
    }
  }
  .formTitle1 {
    width: 100%;
    height: px2rem(40);
    position: relative;
    background-color: #f7f7f7;
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(31);
      width: px2rem(359);
      line-height: px2rem(31);
      top: 50%;
      transform: translate(px2rem(6), -50%);
      padding-left: px2rem(4);
      font-size: px2rem(14);
      color: #fff;
      background-color: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(3);
    }
  }
  .msg {
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    background-color: #fff;
    padding: 0 px2rem(16);
    font-size: px2rem(14);
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
  }
  // .van-cell {
  //   width: px2rem(363);
  //   height: px2rem(31);
  //   margin: 0 auto;
  //   background: rgba(78, 120, 222, 0.81);
  //   opacity: 1;
  //   border-radius: px2rem(3);
  // }

  .mint-cell {
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-of-type {
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    }
  }
  .item1 {
    background-color: #fff;
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    padding: 0 px2rem(16);
    display: flex;
    font-size: px2rem(14);
    box-sizing: border-box;
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-child {
      border: none;
      padding: 0;
    }
    .tag {
      width: px2rem(100);
      text-align: left;
      color: #090909;
      height: px2rem(44);
      font-size: px2rem(14);
      line-height: px2rem(44);
    }
    .arrow {
      font-size: px2rem(14);
      color: #848484;
      margin-left: px2rem(3);
    }
    .info {
      flex: 1;
      text-align: right;
      color: #9f9f9f;
      .pay-type {
        width: 100%;
        height: px2rem(145);
        background-color: #fff;
        .item {
          width: 100%;
          height: px2rem(44);
          border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
          text-align: center;
          font-size: px2rem(14);
          justify-content: center;
          align-items: center;
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
// @import "../../../assets/style/global.scss";
textarea {
  resize: none;
}
.definite7 {
  width: 100%;
  height: 100%;
  .van-collapse {
    background-color: #f7f7f7;
    .van-collapse-item__title {
      padding-left: px2rem(10);
    }
    .van-cell {
      width: px2rem(375);
      height: px2rem(31);
      margin: 0 auto;
      // background: rgba(78, 120, 222, 0.81);
      opacity: 1;
      border-radius: px2rem(3);
      padding-left: px2rem(16);
      padding-right: px2rem(16);
      .van-cell__title {
        width: px2rem(56);
        height: px2rem(21);
        font-size: px2rem(14);
        line-height: px2rem(15);
        // color: rgba(255, 255, 255, 1);
        opacity: 1;
      }
      .van-icon {
        width: px2rem(17);
        height: px2rem(17);
        // font-size: px2rem(14);
        line-height: px2rem(15);
        // color: rgba(255, 255, 255, 1);
        opacity: 1;
      }
    }
    .van-collapse-item__wrapper {
      background-color: #f7f7f7;
      .van-collapse-item__content {
        padding: 0;
        color: #969799;
        font-size: px2rem(14);
        background-color: #fff;
        .van-radio-group {
          // width: px2rem(342);
          .van-cell--clickable {
            // width: px2rem(342);
            color: rgba(9, 9, 9, 1);
            .van-cell__title {
              height: px2rem(31);
              line-height: px2rem(31);
            }
          }
        }
      }
    }
  }
  .cellTitle {
    width: px2rem(375);
    height: px2rem(44);
    background: rgba(255, 255, 255, 1);
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    border-bottom: none;
    opacity: 1;
    .van-cell__title {
      width: px2rem(140);
      height: px2rem(44);
      font-size: px2rem(14);
      line-height: px2rem(44);
      color: rgba(9, 9, 9, 1);
      padding-left: px2rem(10);
      opacity: 1;
    }
  }

  .mint-cell-wrapper {
    padding: 0 px2rem(16);
  }
  .mint-cell {
    min-height: px2rem(44);
  }

  .textFiled {
    .mint-cell-title {
      width: px2rem(160) !important;
      font-size: px2rem(14);
    }
    .mint-cell-value {
      color: #888;
      font-size: px2rem(14);
      .mint-field-core {
        text-align: right;
        color: #888;
        font-size: px2rem(14);
      }
    }
  }
  .text {
    .mint-cell-value {
      .mint-field-core {
        text-align: left;
        color: #888;
        font-size: px2rem(14);
      }
    }
  }
}
</style>
