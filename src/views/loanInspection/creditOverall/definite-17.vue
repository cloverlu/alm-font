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
			imageUpload(v-for="item in definte17" :key="item.id" :item="item")
			
</template>

<script>
import imageUpload from "../components/imageUpload";
import { definte17 } from "../../../utils/dataMock";
export default {
  components: { imageUpload },
  data() {
    return {
      definte17: definte17()
    };
  },
  mounted() {}
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
