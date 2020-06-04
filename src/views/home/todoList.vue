<!--
 * @Descripttion: 待办列表
 * @Author: penglu
 * @Date: 2020-06-03 16:23:28
-->

<template lang="pug">
	.todo-list
		scroll(:top="46")
			.list-item(v-for="item in todoListTitle" :key="item.id" @click="handleClick(item.id)")
				.icon
					span(:class="item.icon")
				.title {{item.text}}
				.warning-num(v-if="item.warningNumber") （{{item.warningNumber}}项）
				.warning-num(v-else) 
				.righht-arrow
					span(class="iconfont iconxiala")
</template>

<script>
import { todoListTitle } from "../../utils/dataMock.js";
import Scroll from "../../components/Scroll";
export default {
  components: { Scroll },
  data() {
    return {
      todoListTitle: todoListTitle
    };
  },
  methods: {
    handleClick(id) {
      if (id === 2) {
        this.$router.push({ name: "loanInspectionIndex" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.todo-list {
  width: 100%;
  height: 100%;
  @include scroll;
  .list-item {
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    padding: 0 px2rem(12) 0 px2rem(18);
    display: flex;
    font-size: px2rem(14);
    border-bottom: px2rem(1) solid #e5e5e5;
    position: relative;
    box-sizing: border-box;
    .icon {
      color: #858993;
      margin-right: px2rem(5);
      font-size: px2rem(15);
    }
    .title {
      color: #090909;
    }
    .warning-num {
      color: #db3822;
    }
    .righht-arrow {
      color: #c6c6c6;
      position: absolute;
      right: px2rem(17);
    }
    &:hover,
    &:focus,
    &.active {
      background-color: #4e78de;
      .icon {
        color: #fff;
      }
      .title {
        color: #fff;
      }
      .righht-arrow {
        color: #fff;
      }
    }
  }
}
</style>
