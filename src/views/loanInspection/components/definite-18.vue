<!--
 * @Descripttion: 申请明细-17
 * @Author: sunhua
 * @Date: 2020-06-08 17:10:29
-->

<template lang="pug">
	.definite-13-wrapper
		.definite-smalltitle
			span(class="colum-blue")
			span  影像维护
		.definite-13-content(v-if="judgeDeviceType.isAndroid")
			imageUploadForAZ(v-for="(item,i) in definte18" :key="i" :item="item" :itemVmodel="params" :read="false" :ref="`definte18${i}`"  )
		.definite-13-content(v-if="judgeDeviceType.isIOS")
			imageUpload(v-for="(item,i) in definte18" :key="i" :item="item" :itemVmodel="params" :read="false" :ref="`definte18${i}`" )
			
</template>

<script>
import imageUpload from "../components/imageUpload";
import imageUploadForAZ from '../components/imageUploadForAZ'
import { definte18 } from "../../../utils/dataMock";
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  components: { imageUpload, imageUploadForAZ },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data () {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      params: {},
      definte18: [],
      loanBusiness: {}
    };
  },
  computed: {
    type () {
      if (this.$route.params.type) {
        return { bizType: this.$route.params.type };
      } else {
        return { bizType: this.userBizType.bizType };
      }
    }
  },
  mounted () {
    const type = this.type.bizType;
    switch (type) {
      case "m2":
        this.definte18 = definte18();
        this.params = this.mVmodel(11);
    }
    // 上一步下一步需要走的详情接口
    const moduleName = this.$route.params.moduleName;
    const name = this.$route.name;

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
    nextFooter (val, oldval) {
      if (val !== oldval) {
        var arrs = {};
        for (let i = 0; i < this.definte18.length; i++) {
          const a = `pic_${i + 1}s`;
          arrs[a] = this.$refs[`definte18${i}`][0].fileList[a];
        }
        this.loanBusiness = Object.assign({}, this.type, arrs);

        console.log(this.params);
        // this.setm1Definite16({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.definite-13-wrapper {
  width: 100%;
  height: 100%;
  .definite-smalltitle {
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
  }
  .definite-13-content {
    width: 100%;
    min-height: px2rem(123);
    background-color: #fff;
  }
}
</style>
