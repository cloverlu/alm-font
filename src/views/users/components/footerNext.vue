<!--
 * @Descripttion: 底部（上一步、下一步）
 * @Author: penglu
 * @Date: 2020-06-05 10:42:00
-->
<template lang="pug">
	.footer-next
		.prev(class="active" @click="footerPrev")
			span(class="iconfont iconxiayiye1")
			span 上一页
		span |
		.next(@click="footerNext")
			span 下一页
			span(class="iconfont iconxiayiye")
			
</template>

<script>
import { normalMixin } from "../../../utils/mixin";
export default {
  mixins: [normalMixin],
  computed: {},
  methods: {
    footerPrev() {
      this.$router.go(-1);
      //随机数
      const val = Date.now();
      //向vuex添加setPrevFooter的值，以方便所有组件判断是否点击了“上一步”
      this.setPrevFooter({ prevFooter: val });
    },
    footerNext() {
      //随机数
      const val = Date.now();
      //向vuex添加nextFooter的值，以方便所有组件判断是否点击了“下一步”
      this.setNextFooter({ nextFooter: val, tag: "nextFooter" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.footer-next {
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  display: flex;
  span {
    color: #c6c6c6;
    font-size: px2rem(17);
    line-height: px2rem(38);
  }
  .prev,
  .next {
    flex: 1;
    text-align: center;
    font-size: px2rem(15);
    color: #9f9f9f;
    line-height: px2rem(38);
    &:hover,
    &.active {
      span {
        color: #4d77db;
      }
    }
    .iconfont {
      font-size: px2rem(12);
      line-height: 1;
    }
    span {
      &:first-child {
        margin-right: px2rem(5);
      }
    }
  }
}
</style>
