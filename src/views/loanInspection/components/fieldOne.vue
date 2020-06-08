<!--
 * @Descripttion: 文本域（要求+落实情况）
 * @Author: penglu
 * @Date: 2020-06-08 09:12:42
-->

<template lang="pug">
	.field-one
		.field-one-item(v-for="item in definite" :key="item.id")
			.field-one-item-tag {{item.name}}
			.field-one-item-field
				mt-field(v-model="params[item.modelName]" class="textArea" type="textarea" rows="3" placeholder="请输入")
		
</template>

<script>
export default {
  props: {
    definite: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      params: {}
    };
  },
  watch: {},
  created() {
    this.definite.forEach(item => {
      this.$set(this.params, item.modelName, "");
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.field-one {
  width: 100%;
  height: 100%;
  .field-one-item {
    width: 100%;
    height: px2rem(118);
    @include borderTopColor;
    .field-one-item-tag,
    .field-one-item-field {
      width: 100%;
      box-sizing: border-box;
    }
    .field-one-item-tag {
      height: px2rem(44);
      @include fontColorBlack;
      font-size: px2rem(14);
      line-height: px2rem(44);
      padding: 0 px2rem(16) 0 px2rem(16);
    }
    .field-one-item-field {
      height: px2rem(74);
      @include borderTopColor;
    }
  }
}
</style>
