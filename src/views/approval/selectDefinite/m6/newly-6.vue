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
				fieldOne(:definite="newly6" :info="detail" :read="true" ref="fieldOne" )
			.item
				span(class="tag") 是否建议调整额度
				span(class="info" v-if="detail.isAdjustLine === 1") 是
				span(class="info" v-else-if="detail.isAdjustLine === 0") 否
			.item
				span(class="tag") 调整为
				span(class="info") {{detail.adjustLine}}
					
			

</template>

<script>
import {newly6} from '../../../../utils/dataMock'
import fieldOne from '../../../loanInspection/components/fieldOne'
export default {
	components:{fieldOne,newly6},
	props: ["detail"],
	data(){
		return{
			newly6:newly6
		}
	},
	mounted() {
    
	},
	watch: {
    
  },
	methods:{
	
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