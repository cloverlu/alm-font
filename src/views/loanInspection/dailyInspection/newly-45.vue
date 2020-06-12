<!--
 * @Descripttion: 新增4/新增5
 * @Author: penglu
 * @Date: 2020-06-11 16:37:28
-->

<template lang="pug">
	.definite-89-wrapper
		.definite-89-top
			.definite-1-title2
				span(class="title") 担保情况检查
			.definite-89-dropdown
				van-dropdown-menu(class="dropdown89" )
					van-dropdown-item(:options="option" v-model="value")
		.definite-89-content
			newly4(v-if="value===0")
			newly5(v-if="value===1")
</template>

<script>
import { DropdownMenu, DropdownItem } from "vant";
import newly4 from "../dailyInspection/newly-4";
import newly5 from "../dailyInspection/newly-5";
export default {
  components: {
    "van-dropdown-menu": DropdownMenu,
    "van-dropdown-item": DropdownItem,
    newly4,
    newly5
  },
  data() {
    return {
      dropVisibale: false,
      value: 0,
      option: [
        { text: "房地产抵押担保适用", value: 0 },
        { text: "融资担保机构担保适用", value: 1 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.definite-89-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 120;
  }
  .definite-89-top {
    height: px2rem(70);
    width: 100%;
    flex: 0 0 px2rem(70);
    .definite-89-dropdown {
      width: 100%;
      height: px2rem(31);
      padding: 0 px2rem(5);
      box-sizing: border-box;
      position: relative;
      z-index: 150;
      .drop-down-item {
        width: 100%;
        height: px2rem(31);
        line-height: px2rem(31);
        color: #fff;
        background-color: rgba(78, 120, 222, 0.81);
        padding: 0 px2rem(10);
        border-top-left-radius: px2rem(3);
        border-top-right-radius: px2rem(3);
        font-size: px2rem(14);
        box-sizing: border-box;
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08);
      }
      .drop-down-content {
        height: px2rem(88);
        position: absolute;
        top: px2rem(32);
        background-color: #fff;
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08);
        left: px2rem(5);
        right: px2rem(5);
        border-bottom-left-radius: px2rem(3);
        border-bottom-right-radius: px2rem(3);
        transition-duration: 0.2s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        &.open {
          transition: transform 0.3s, -webkit-transform 0.3s;
        }
      }
    }
  }
  .definite-89-content {
    flex: 1;
  }
}
</style>
