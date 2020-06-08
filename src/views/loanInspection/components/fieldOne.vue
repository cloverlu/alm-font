<!--
 * @Descripttion: 文本域（要求+落实情况）
 * @Author: penglu
 * @Date: 2020-06-08 09:12:42
-->

<template lang="pug">
	.field-one
		.item
			.tag 要求
			.field
				mt-field(v-model="params.requireCheck" class="textArea" type="textarea" rows="3" placeholder="请输入")
		.item
			.tag 落实情况
			.field
				mt-field(v-model="params.checked" class="textArea" type="textarea" rows="3" placeholder="请输入")
</template>

<script>
export default {
  data() {
    return {
      params: {
        requireCheck: "",
        checked: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.field-one {
  width: 100%;
  height: 100%;
  .item {
    width: 100%;
    height: px2rem(118);
    @include borderTopColor;
    .tag,
    .field {
      width: 100%;
      box-sizing: border-box;
    }
    .tag {
      height: px2rem(44);
      @include fontColorBlack;
      font-size: px2rem(14);
      line-height: px2rem(44);
      padding: 0 px2rem(16) 0 px2rem(16);
    }
    .field {
      height: px2rem(74);
      @include borderTopColor;
    }
  }
}
</style>
