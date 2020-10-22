<!--
 * @Descripttion: 
 * @Author: penglu
 * @Date: 2020-07-24 09:32:12
--> 
<template lang="pug">
	.newly-6
		.definite-1-title2 检查结论
		.definite-smalltitle
			span(class="colum-blue")
			span 检查结论（若有）
		.definite-field
			.item2
				fieldOne(:definite="newly6" :info="params" :read="false" ref="fieldOne" )
			.item
				span(class="tag") 是否建议调整额度
				almSelect(:selectData="yesNo"  :defaultValue="params.isAdjustLine" :title="selectTitle" :triggerId="isAdjustLine" :fontColor="fontColor" @getSelectValue="getSelect" class="info" ) 
				span(class="iconfont iconxiala arrow")
			.item
				span(class="tag") 调整为
				span(class="info") 
					input(v-model="params.adjustLine" type="input" class="field-input" placeholder="请输入调整后额度" )
			

</template>

<script>
import {newly6,yesNo} from '../../../utils/dataMock'
import fieldOne from '../../loanInspection/components/fieldOne'
import almSelect from '../components/select'
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
	components:{fieldOne,almSelect},
	mixins: [normalMixin, userMixin],
  props: ["uBizId"],
	data(){
		return{
			bizId: this.$route.params.bizId || this.uBizId,
			newly6:newly6,
			yesNo:yesNo,
			isAdjustLine:'isAdjustLine',
			selectTitle:'是否建议调整额度',
			fontColor:'blue',
			params:{
				isAdjustLine:9,
				adjustLine:''
			},
			loanBusiness:{}
		}
	},
	mounted() {
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
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.loanBusiness = Object.assign(
          {},
          this.params,
          this.$refs.fieldOne.params
        );
      }
    }
  },
	methods:{
		getSelect(data){
			this.params.isAdjustLine = data[0].key
		}
	}
	
}
</script>

<style lang="scss" scoped>
.newly-6{
	.definite-smalltitle{
		height:px2rem(15);
	}
	.definite-field{
		margin-top:px2rem(10);
	}

}

</style>