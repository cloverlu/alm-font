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
			imageUpload(v-for="(item,i) in definte16" :key="i" :item="item" :itemVmodel="params" :read="false" :ref="`definte16${i}`")
			
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
      bizId: this.$route.params.bizId,
      definte16: [],
      params: {},
      type: ""
    };
  },
  mounted() {
    const type = this.$route.params.type;
    switch (type) {
      case "m1":
        this.type = {
          bizType: "m1"
        };
        this.definte16 = definte16();
        this.params = this.mVmodel(11);
        break;
      case "m5":
        this.type = {
          bizType: "m5"
        };
        this.definte16 = definte162();
        this.params = this.mVmodel(11);
        break;
      case "m6":
        this.type = {
          bizType: "m6"
        };
        this.definte16 = definte172();
        this.params = this.mVmodel(10);
    }
    // 上一步下一步需要走的详情接口
    if (this.$route.params.saveFlag === 1) {
      this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
      console.log(this.forBizDetail(this.$route.name));
      return false;
    } else {
      this.saveFlag.forEach(item => {
        if (item.currentName === this.$route.name && item.flag === true) {
          this.setforDizDetail(this);
          this.params = this.forBizDetail(this.$route.name);
          console.log(this.forBizDetail(this.$route.name));
          return false;
        }
      });
    }
  },
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
        var arrs = {};
        for (let i = 0; i < this.definte16.length; i++) {
          const a = `pic_${i + 1}s`;
          arrs[a] = this.$refs[`definte16${i}`][0].fileList[a];
        }
        this.params = Object.assign({}, this.type, arrs);

        console.log(this.params);
        // this.setm1Definite16({ params: this.params });
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
            url: ``,
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
