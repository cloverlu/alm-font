<!--
 * @Descripttion: 主页
 * @Author: penglu
 * @Date: 2020-06-01 16:18:20
-->
<template lang="pug">
	.wrapper 	
		.tabs 
			.tabs-card(@click="handclick")
				.card(:class="tabsVisible ? 'active' : ''")
					.one 待办列表
				span |
				.card(:class="tabsVisible ? '' : 'active'")
					.two 我的客户
				.card-bar(:class="tabsVisible ? 'card-bar-one' : 'card-bar-two'")
			.tabs-wrapper
				.wrapper-content(v-if="tabsVisible") 
					TodoList
				.wrapper-content(v-else-if="!tabsVisible") 
					UserList
		router-view 
</template>

<script>
import TodoList from "../home/todoList";
import UserList from "../home/userList";
export default {
  components: { TodoList, UserList },
  data() {
    return {
      tabsVisible: true
    };
  },
  methods: {
    handclick() {
      console.log(event);
      this.tabsVisible = !this.tabsVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.wrapper {
  width: 100%;
  height: 100%;
  .tabs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .tabs-card {
      width: 100%;
      height: px2rem(44);
      // flex: 0 0 px2rem(44);
      border-bottom: px2rem(1) solid #d6d6db;
      display: flex;
      position: relative;
      .card {
        flex: 1;
        line-height: px2rem(44);
        font-size: px2rem(15);
        font-weight: Bold;
        color: #9f9f9f;
        .one {
          margin: 0 auto;
          text-align: center;
          width: px2rem(100);
        }
        .two {
          margin: 0 auto;
          text-align: center;
          width: px2rem(100);
        }
        &:hover,
        &:focus,
        &.active {
          .one {
            color: #4e78de;
          }
          .two {
            color: #4e78de;
          }
        }
      }
      .card-bar {
        position: absolute;
        bottom: 0;
        width: px2rem(100);
        height: px2rem(1);
        background-color: #4e78de;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &.card-bar-one {
          transform: translateX(px2rem(43.75));
        }
        &.card-bar-two {
          transform: translateX(px2rem(231.25));
        }
      }
      span {
        font-size: px2rem(15);
        color: #707070;
        margin-top: px2rem(15);
      }
    }
  }
  .tabs-wrapper {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    .wrapper-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
