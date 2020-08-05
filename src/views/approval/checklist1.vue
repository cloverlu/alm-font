<!--
 * @Descripttion: 贷后检查流程处理1
 * @Author: penglu
 * @Date: 2020-06-16 10:58:00
-->

<template lang="pug">
	.checklist-1-wrapper
		.checklist-current(v-if="approveHasChildRouter")
			.definite-1-title
				span(class="colum-blue")
				span(class="title") 业务信息
			.definite-field(class="not-margin")
				.item
					span(class="tag") 检查类型
					span(class="info") {{info.bizTypeName}}
				.item
					span(class="tag") 客户名称
					span(class="info") {{info.custName}}
				.item
					span(class="tag") 业务编号
					span(class="info") {{info.bizCode}}
				.item
					span(class="tag") 当前环节
					span(class="info") {{info.currentLinkName}}
				.item
					span(class="tag") 接收时间
					span(class="info") {{info.reciveTime}}
				.item1(v-show="!showVisible")
					a(@click="infoMore") 查看更多 »
			.definite-more(v-if="showVisible")
				m1(v-if="$route.params.type === 'm1'")
				m2(v-else-if="$route.params.type === 'm2'")
				m3(v-else-if="$route.params.type === 'm3'")
				m4(v-else-if="$route.params.type === 'm4'")
				m5(v-else-if="$route.params.type === 'm5'")
				m6(v-else-if="$route.params.type === 'm6'")

			.definite-1-title
				span(class="colum-blue")
				span(class="title") 前一环节意见
			.definite-field(:class="index === 0 ? 'not-margin' : ''" v-for="(item,index) in info.aproveInfo" :key="index" v-show="index < max")
				.definite-item-title
					span 环节：{{item.linkName}}
				//- .item
				//- 	span(class="tag") 环节
				//- 	span(class="info") {{item.linkName}}
				.item
					span(class="tag") 处理机构
					span(class="info") {{item.orgName}}
				.item
					span(class="tag") 处理人员
					span(class="info") {{item.emplName}}
				.item
					span(class="tag") 处理时间
					span(class="info") {{item.processTime}}
				.item
					span(class="tag") 意见
					span(class="info" v-if="item.agreeResult === '0'") 不同意
					span(class="info" v-else-if="item.agreeResult === '1'") 同意
					span(class="info" v-else) 无
				.item1(@click="linkMore" v-show="showLink") 查看更多 »
		router-view(v-else)
					
</template>

<script>
import { approvalMixin, normalMixin } from "../../utils/mixin";
import m1 from "../approval/selectDefinite/m1/m1";
import m2 from "../approval/selectDefinite/m2/m2";
import m3 from "../approval/selectDefinite/m3/m3";
import m4 from "../approval/selectDefinite/m4/m4";
import m5 from "../approval/selectDefinite/m5/m5";
import m6 from "../approval/selectDefinite/m6/m6";
import { approveBaseDetail } from "../../api/approval";
export default {
  components: { m1, m2, m3, m4, m5, m6 },
  mixins: [approvalMixin, normalMixin],

  data () {
    return {
      approveHasChildRouter: this.$route.params.approveHasChildRouter,
      showVisible: false,
      showLink: true,
      info: {},
      max: 1,
      params: {}
    };
  },
  beforeRouteEnter (to, from, next) {
    to.params.approveHasChildRouter =
      to.name === "checklist1" || to.name === "checklist2";
    next();
  },
  beforeRouteUpdate (to, from, next) {
    this.approveHasChildRouter =
      to.name === "checklist1" || to.name === "checklist2";
    next();
  },
  mounted () {
    this.getBaseDetail();
  },
  methods: {
    // 基本详情
    getBaseDetail () {
      let params = {
        bizId: this.$route.params.bizId
      };
      approveBaseDetail(this, { params }).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.info = res.data.data;
          this.bizType(this.info, this.info.bizType);
          if (this.info.aproveInfo) {
            if (this.info.aproveInfo.length === 1) {
              this.showLink = false;
            }
          }
        }
      });
    },
    infoMore () {
      this.showVisible = !this.showVisible;
      // 点击更多的时候，为按钮添加一个随机数，用于监听是否点击了按钮
      const val = Date.now();
      this.setAddmore({ addmore: val });
    },
    linkMore () {
      this.max = this.info.aproveInfo.length;
      this.showLink = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../assets/style/global.scss";
.checklist-1-wrapper {
  width: 100%;
  height: 100%;
  .checklist-current {
    width: 100%;
    height: 100%;
    .definite-field {
      &:not(.not-margin) {
        margin-top: px2rem(10);
      }
      .item1 {
        width: 100%;
        padding: px2rem(15);
        font-size: px2rem(14);
        box-sizing: border-box;
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
        text-align: right;
        color: #4e78de;
      }
      .definite-item-title {
        font-size: px2rem(14);
        padding: px2rem(7) px2rem(16);
        background-color: rgba(78, 120, 222, 0.81);
        color: #fff;
        box-sizing: border-box;
        border-radius: px2rem(3);
      }
    }
  }
}
</style>
