<!--
 * @Descripttion: 申请明细-16
 * @Author: penglu
 * @Date: 2020-06-08 17:10:29
-->

<template lang="pug">
	.definite-13-wrapper
		.definite-smalltitle
			span(class="colum-blue")
			span  影像维护
		.definite-13-content
			imageUpload(v-for="(item,i) in definte17" :key="i" :item="item" :itemVmodel="params" :read="false" :ref="`definte17${i}`")
			
</template>

<script>
import imageUpload from "../components/imageUpload";
import { definte17 } from "../../../utils/dataMock";
import { normalMixin } from "../../../utils/mixin";
export default {
  components: { imageUpload },
  mixins: [normalMixin],
  data() {
    return {
      bizId: this.$route.params.bizId,
      definte17: [],
      params: {},
      type: ""
    };
  },
  mounted() {
    const type = this.$route.params.type;
    switch (type) {
      case "m3":
        this.type = {
          bizType: "m3"
        };
        this.definte17 = definte17();
        this.params = this.mVmodel(12);
    }
    // 上一步下一步需要走的详情接口
    const flag = this.$route.params.saveFlag;
    const name = this.$route.name;
    this.mountedTag(flag, name);
  },
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
        var arrs = {};
        for (let i = 0; i < this.definte17.length; i++) {
          const a = `pic_${i + 1}s`;
          arrs[a] = this.$refs[`definte17${i}`][0].fileList[a];
        }
        this.params = Object.assign({}, this.type, arrs);

        console.log(this.params);
        // this.setm1Definite16({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
