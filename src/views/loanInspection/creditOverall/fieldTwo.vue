<!--
 * @Descripttion: 财务科目
 * @Author: penglu
 * @Date: 2020-06-10 17:17:16
-->

<template lang="pug">
	.caiwu
		.caiwu-title(@click="aaa") 财务科目
		.caiwu-tabs
			.caiwu-tabs-title
				.caiwu-tabs-bar(:style="{ transform: itemClass }")
				.tabs-title-item(
					v-for="(item,index) in info" :key="item.id" 
					@click="toggle(item.id,index)"
					:ref="'item'+index"
				)
					span {{item.title}}
					span(class="xuant" v-if="item.tag") ({{item.tag}})
			.caiwu-tabs-content(v-for="(item2,index2) in info" :key="item2.id" v-if="toggleNum === item2.id")
				.content-type1(v-if="type === 1")
					.definite-field
						.item
							span(class="tag big") 当前余额
							span(class="info") 
								input(v-model="params[item2.currentBalance]" :disabled="disabledVisible" type="input" class="field-input" placeholder="请输入")
						.item
							span(class="tag big") 上期检查（或调查）时点余额
							span(class="info") 
								input(v-model="params[item2.lastBalance]" :disabled="disabledVisible" type="input" class="field-input" placeholder="请输入")
						.item
							span(class="tag big") 如变动超过30%，原因
						.item(class="item-textarea")
							mt-field(v-model="params[item2.Chang30Msg]" :disabled="disabledVisible" class="textArea" type="textarea" rows="3" placeholder="请输入")
				.content-type2(v-else-if="type === 2")
					.definite-field
						.item
							span() 近三个月的情况：
						.item(class="item-textarea")
							mt-field(v-model="params[item2.Inc3MSitu]" :disabled="disabledVisible" class="textArea" type="textarea" rows="3" placeholder="请输入")
						.item
							span() 如剔除季节性因素后变动超30%，原因
						.item(class="item-textarea")
							mt-field(v-model="params[item2.Chang30Msg]" :disabled="disabledVisible" class="textArea" type="textarea" rows="3" placeholder="请输入")
							
</template>

<script>
import { realPx, px2rem } from "@/utils/utils";
import { approvalMixin } from "../../../utils/mixin";

export default {
  props: {
    info: {
      type: Array,
      default: () => []
    },
    detail: {
      type: Object,
      default: () => {}
    },
    type: {
      type: Number,
      default: () => 1
    },
    // 是否只读，只读的话disabled为true
    read: {
      type: Boolean,
      default: () => false
    }
  },
  mixins: [approvalMixin],
  data() {
    return {
      disabledVisible: false,
      toggleNum: 1,
      itemClass: "",
      params: {
        // currentBalance: {},
        // lastBalance: {},
        // Chang30Msg: {},
        // Inc3MSitu: {}
      }
    };
  },
  created() {
    var a = {};
    this.disabledVisible = this.read ? true : false;
    if (!this.detail) {
      this.info.forEach((item, index) => {
        if (item.lastBalance) {
          a[item.lastBalance] = "";
        }
        if (item.Chang30Msg) {
          a[item.Chang30Msg] = "";
        }
        if (item.Inc3MSitu) {
          a[item.Inc3MSitu] = "";
        }
        if (item.currentBalance) {
          a[item.currentBalance] = "";
        }
      });
    } else {
      a = this.detail;
    }
    this.info.forEach((item, index) => {
      if (item.lastBalance) {
        this.$set(this.params, item.lastBalance, a[item.lastBalance]);
      }
      if (item.Chang30Msg) {
        this.$set(this.params, item.Chang30Msg, a[item.Chang30Msg]);
      }
      if (item.Inc3MSitu) {
        this.$set(this.params, item.Inc3MSitu, a[item.Inc3MSitu]);
      }
      if (item.currentBalance) {
        this.$set(this.params, item.currentBalance, a[item.currentBalance]);
      }

      // console.log(this.params);
    });
  },
  mounted() {
    this.$nextTick(() => {
      // 页面加载完成蓝条的位置
      this.bluePosition(0);
    });
  },
  watch: {
    // 监听是否触发了“点击更多”按钮,以解决点击更多以后蓝色横杠并没有回到初始的位置
    addmore(val, oldval) {
      this.bluePosition(0);
    },
    detail(val, oldval) {
      var a = {};
      this.disabledVisible = this.read ? true : false;
      if (!val) {
        this.info.forEach((item, index) => {
          if (item.lastBalance) {
            a[item.lastBalance] = "";
          }
          if (item.Chang30Msg) {
            a[item.Chang30Msg] = "";
          }
          if (item.Inc3MSitu) {
            a[item.Inc3MSitu] = "";
          }
          if (item.currentBalance) {
            a[item.currentBalance] = "";
          }
        });
      } else {
        a = val;
      }
      this.info.forEach((item, index) => {
        if (item.lastBalance) {
          this.$set(this.params, item.lastBalance, a[item.lastBalance]);
        }
        if (item.Chang30Msg) {
          this.$set(this.params, item.Chang30Msg, a[item.Chang30Msg]);
        }
        if (item.Inc3MSitu) {
          this.$set(this.params, item.Inc3MSitu, a[item.Inc3MSitu]);
        }
        if (item.currentBalance) {
          this.$set(this.params, item.currentBalance, a[item.currentBalance]);
        }

        // console.log(this.params);
      });
    }
  },
  methods: {
    toggle(id, index) {
      this.toggleNum = id;
      // 蓝条位置
      this.bluePosition(index);
    },
    bluePosition(index) {
      // const index = 0;
      const item = "item" + index;
      if (this.$refs[item][0]) {
        const defaultLeft = this.$refs.item0[0].offsetLeft;
        const marginLeft = this.$refs[item][0].offsetLeft;
        const width = this.$refs[item][0].offsetWidth;
        const tx = marginLeft - defaultLeft + (width - 20) / 2 + "px";
        this.itemClass = `translateX(${tx})`;
      }
    },
    aaa() {
      console.log(this.params);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.caiwu {
  width: 100%;
  margin-bottom: px2rem(8);

  .caiwu-title {
    width: 100%;
    height: px2rem(32);
    line-height: px2rem(32);
    font-size: px2rem(14);
    color: #4e78de;
    border-bottom: px2rem(1) solid #dbdbdb;
    padding: 0 px2rem(16);
    box-sizing: border-box;
  }
  .caiwu-tabs {
    width: 100%;
    .caiwu-tabs-title {
      width: 100%;
      height: px2rem(37);
      line-height: px2rem(37);
      position: relative;
      display: flex;
      padding: 0 px2rem(10);
      box-sizing: border-box;
      .xuant {
        color: #4e78de;
      }
      .caiwu-tabs-bar {
        position: absolute;
        bottom: px2rem(5);
        width: px2rem(20);
        height: px2rem(3);
        background-color: #4e78de;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &.card-bar-one {
          transform: translateX(px2rem(193));
        }
        &.card-bar-two {
          transform: translateX(px2rem(231.25));
        }
      }
      .tabs-title-item {
        padding: 0 px2rem(5);
        display: block;
        // width: px2rem(70);
        // text-align: center;
        box-sizing: border-box;
        color: #727272;
        font-size: px2rem(14);
        // border-bottom: px2rem(3) solid transparent;
        // &.active {
        //   border-bottom: px2rem(3) solid #4e78de;
        // }
      }
    }
    .caiwu-tabs-content {
      width: 100%;
      background-color: #fff;
      .item-textarea {
        height: px2rem(74);
      }
    }
  }
}
</style>
