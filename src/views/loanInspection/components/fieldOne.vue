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
				mt-field(v-model="params[item.modelName]" :disabled='disabeld' class="textArea" type="textarea" rows="3" )
		
</template>

<script>
export default {
  props: {
    definite: {
      type: Array,
      default: () => []
    },
    info: {
      type: Object,
      default: () => {}
    },
    // 是否只读，只读的话disabled为true
    read: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      params: {},
      disabeld: false
    };
  },
  watch: {
    info(val, oldval) {
      var a = {};
      this.disabeld = this.read ? true : false;
      if (!val) {
        this.definite.forEach(item => {
          a[item.modelName] = "";
        });
      } else {
        a = val;
      }
      // console.log(a);
      this.definite.forEach((item, index) => {
        this.$set(this.params, item.modelName, a[item.modelName]);
      });
    }
  },
  mounted() {
		
    this.$nextTick(() => {
      var a = {};
      this.disabeld = this.read ? true : false;
      if (!this.info) {
        this.definite.forEach(item => {
          a[item.modelName] = "";
        });
      } else {
        a = this.info;
      }
      this.definite.forEach((item, index) => {
        this.$set(this.params, item.modelName, a[item.modelName]);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.field-one {
  width: 100%;
  height: 100%;
  .field-one-item {
    width: 100%;
    // height: px2rem(118);
    @include borderTopColor;
    .field-one-item-tag,
    .field-one-item-field {
      width: 100%;
      box-sizing: border-box;
    }
    .field-one-item-tag {
      min-height: px2rem(44);
      @include fontColorBlack;
      font-size: px2rem(14);
      padding: px2rem(15) px2rem(16);
    }
    .field-one-item-field {
      height: px2rem(74);
      @include borderTopColor;
    }
  }
}
</style>
