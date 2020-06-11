<!--
 * @Descripttion: 财务科目
 * @Author: penglu
 * @Date: 2020-06-10 17:17:16
-->

<template lang="pug">
	.caiwu
		.caiwu-title 财务科目
		.caiwu-tabs
			.caiwu-tabs-title
				.caiwu-tabs-bar(:style="{ transform: itemClass }")
				.tabs-title-item(
					v-for="(item,index) in info" :key="item.id" 
					@click="toggle(item.id,index)"
					:ref="'item'+index"
				) {{item.title}}
			.caiwu-tabs-content(v-for="(item2,index2) in info" :key="item2.id" v-if="toggleNum === item2.id")
				.content-type1(v-if="type === 1")
					.definite-field
						.item
							span(class="tag big") 当前余额
							span(class="info") 
								input(v-model="params[item2.items.currentBalance]" type="input" class="field-input" placeholder="请输入")
						.item
							span(class="tag big") 上期检查（或调查）时点余额
							span(class="info") 
								input(v-model="params[item2.items.lastBalance]" type="input" class="field-input" placeholder="请输入")
						.item
							span(class="tag big") 如变动超过30%，原因
						.item(class="item-textarea")
							mt-field(v-model="params[item2.items.Chang30Msg]" class="textArea" type="textarea" rows="3" placeholder="请输入")
				.content-type2(v-else-if="type === 2")
					.definite-field
						.item
							span(class="tag big") 近三个月的情况：
						.item(class="item-textarea")
							mt-field(v-model="params[item2.items.Inc3MSitu]" class="textArea" type="textarea" rows="3" placeholder="请输入")
						.item
							span(class="tag big") 如剔除季节性因素后变动超30%，原因
						.item(class="item-textarea")
							mt-field(v-model="params[item2.items.Chang30Msg]" class="textArea" type="textarea" rows="3" placeholder="请输入")
							
</template>

<script>
import { realPx, px2rem } from "@/utils/utils";

export default {
  props: ["info", "type"],
  data() {
    return {
      toggleNum: 1,
      itemClass: "",
      params: {}
    };
  },
  created() {
    console.log(this.info);
    this.info.forEach(item => {
      this.$set(this.params, item.items, "");
    });
  },
  mounted() {
    this.$nextTick(() => {
      // 页面加载完成蓝条的位置
      const index = 0;
      const item = "item" + index;
      if (this.$refs[item][0]) {
        const marginLeft = realPx(this.$refs[item][0].offsetLeft);
        const width = realPx(this.$refs[item][0].offsetWidth);
        const tx = px2rem(marginLeft - 10 + (width - 20) / 2) + "rem";
        this.itemClass = `translateX(${tx})`;
      }
    });
  },
  watch: {
    params(val, oldval) {
      console.log(val);
    }
  },
  methods: {
    toggle(id, index) {
      this.toggleNum = id;
      // 蓝条位置
      const item = "item" + index;
      if (this.$refs[item][0]) {
        const marginLeft = realPx(this.$refs[item][0].offsetLeft);
        const width = realPx(this.$refs[item][0].offsetWidth);
        const tx = px2rem(marginLeft - 10 + (width - 20) / 2) + "rem";
        this.itemClass = `translateX(${tx})`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
