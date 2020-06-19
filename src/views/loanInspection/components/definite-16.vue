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
			imageUpload(v-for="(item,i) in definte16" :key="i" :item="item" :itemVmodel="params.images" :read="false" :ref="`definte16${i}`")
			
</template>

<script>
import imageUpload from "../components/imageUpload";
import { definte16, definte162, definte172 } from "../../../utils/dataMock";
import { normalMixin, loanInsM1 } from "../../../utils/mixin";
export default {
  components: { imageUpload },
  mixins: [normalMixin, loanInsM1],
  data() {
    return {
      definte16: [],
      params: {
        images: []
      }
    };
  },
  mounted() {
    const type = this.$route.params.type;
    switch (type) {
      case "loanCreditFirst":
        this.definte16 = definte16();
        this.params.images = this.mVmodel(11);
        break;
      case "loanFastCreditFirst":
        this.definte16 = definte162();
        // this.params.images = this.mVmodel(11);
        break;
      case "loanDailyInspection":
        this.definte16 = definte172();
      // this.params.images = this.mVmodel(10);
    }
  },
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
        console.log(this.params);
        const i = 0;
        console.log(this.$refs[`definte16${i}`][0].fileList);
        this.setm1Definite16({ params: this.params });
        this.footerRoute("loanCreditFirst", "firstDefinite16");
        // this.$router.push({ name: "firstDefinite16" });
      }
    }
  },
  methods: {
    mVmodel(num) {
      const definite16 = {};
      for (let i = 0; i < num; i++) {
        const a = `pic_${i + 1}s`;
        definite16[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return definite16;
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
