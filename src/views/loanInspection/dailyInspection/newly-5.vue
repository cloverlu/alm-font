<!--
 * @Descripttion: 新增 5
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
	.newly5-wrapper
		.wrapper
			.newly-5-repeat(v-for="(item,index) in info" :key="item.id" :class="trasIndex === item.id ? 'transa' : ''")
				.repeat-operation(v-if="index !== 0")
					.repeat-operation-title 新增 
					.repeat-operation-delete(@click="operateDelete(index,item.id)")  删除
				.definite-field
					.item
						span(class="tag") 担保公司名称
						span(class="info") 
							input(v-model="item.assitName" type="input" class="field-input" placeholder="请输入")
					.item
						span(class="tag") 我行合作状态
						span(class="info") 
							input(v-model="item.cooperatStatus" type="input" class="field-input" placeholder="请输入")
					.item
						span(class="tag") 风险分类
						span(class="info") 
							input(v-model="item.assitFiveClass" type="input" class="field-input" placeholder="请输入")
		.add
			mt-button(class="add-primary" type="primary" @click="addInfo") + 增加
</template>

<script>
import { Button } from "mint-ui";
import { normalMixin } from "../../../utils/mixin";
export default {
  components: { "mt-button": Button },
  props: ["detail","uBizId"],
  mixins: [normalMixin],
  data() {
    return {
			bizId: this.$route.params.bizId || this.uBizId,
      info: {
        assitInfoForGuarantee: [
          {
            id: 1,
            assitName: "", //担保公司名称
            cooperatStatus: "", //我行合作状态
            assitFiveClass: "" //风险分类
          }
        ]
      },
      trasIndex: "",
      params: {}
    };
  },
  mounted() {
    this.info = this.detail.assitInfoForGuarantee;
  },
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
				this.params = this.info;
				console.log(this.params)
        this.$emit("upperParams5", this.params);
      }
    },
    detail(val, oldval) {
      this.info = val.assitInfoForGuarantee;
		},
		async flagSava45(val,oldval){
			if(val !== oldval){
				const name = this.$route.name;
				await this.setforDizDetail(this);
				this.info = this.forBizDetail(name).assitInfoForGuarantee;
				// console.log(this.info)
			
			}
		}
  },
  methods: {
    operateDelete(index, id) {
      this.trasIndex = id;
      setTimeout(() => {
        this.info.splice(index, 1);
      }, 100);
    },
    addInfo() {
      const item = {
        assitClassification: "2",
        id: Date.now(),
        assitName: "", //担保公司名称
        cooperatStatus: "", //我行合作状态
        assitFiveClass: "" //风险分类
      };
      this.info.push(item);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.newly5-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .wrapper {
    flex: 1;
    .newly-5-repeat {
      &.transa {
        transform: scaleX(0);
        transition: transform 0.2s;
        transform-origin: top right;
      }
      .repeat-operation {
        width: 100%;
        height: px2rem(30);
        line-height: px2rem(30);
        background-color: #dee4f2;
        padding: 0 px2rem(16);
        box-sizing: border-box;
        display: flex;
        .repeat-operation-title {
          color: #4e78de;
          font-size: px2rem(12);
          flex: 1;
          text-align: left;
        }
        .repeat-operation-delete {
          color: #db3822;
          font-size: px2rem(12);
          flex: 0 0 px2rem(30);
          text-align: right;
        }
      }
    }
  }

  .add {
    flex: 0 0 px2rem(70);
    width: 100%;
    padding: px2rem(11) px2rem(15);
    box-sizing: border-box;
    margin-top: px2rem(20);
  }
}
</style>
