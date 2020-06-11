<!--
 * @Descripttion: 检查申请明细-8、检查申请明细-9
 * @Author: penglu
 * @Date: 2020-06-10 16:04:35
-->
<template lang="pug">
	.definite-89-wrapper
		//- .mask(v-show="dropVisibale")
		.definite-89-top
			.definite-1-title
				span(class="colum-blue")
				span(class="title") 企业财务情况
			.definite-89-dropdown
				//- .drop-down-item(@click="dropShow") aaa
				//- .drop-down-content(v-show="dropVisibale")
				van-dropdown-menu(class="dropdown89" )
					van-dropdown-item(:options="option" v-model="value")
		.definite-89-content
			definite8(v-if="value===0")
			definite9(v-if="value===1")
			


</template>

<script>
import definite8 from "../creditOverall/credit8";
import definite9 from "../creditOverall/credit9";
import { DropdownMenu, DropdownItem } from "vant";
export default {
  components: {
    "van-dropdown-menu": DropdownMenu,
    "van-dropdown-item": DropdownItem,
    definite8,
    definite9
  },
  data() {
    return {
      dropVisibale: false,
      value: 0,
      option: [
        { text: "加工制造类企业适用", value: 0 },
        { text: "贸易类/其他类企业适用", value: 1 }
      ]
    };
  },
  watch: {},
  methods: {
    dropShow() {
      console.log("sss");
      this.dropVisibale = !this.dropVisibale;
    }
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
    height: px2rem(85);
    width: 100%;
    flex: 0 0 px2rem(85);
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

<style lang="scss">
@import "../../../assets/style/global.scss";
.dropdown89 {
  .van-dropdown-menu__bar {
    height: px2rem(31);
    border-top-left-radius: px2rem(3);
    border-top-right-radius: px2rem(3);
    background-color: rgba(78, 120, 222, 0.81);

    .van-dropdown-menu__item {
      flex: none;
      width: 100%;
      .van-dropdown-menu__title {
        color: #fff;
        font-size: px2rem(14);
        line-height: px2rem(31);
        width: 100%;
        &::after {
          right: px2rem(10);
        }
      }
    }
  }
}
</style>
