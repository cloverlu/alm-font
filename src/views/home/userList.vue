<!--
 * @Descripttion: 我的客户
 * @Author: penglu
 * @Date: 2020-06-03 16:23:39
-->
<template lang="pug">
	.user-list 
		.user-search
			input(class="search" v-model="userSearch" @change="userChange" placeholder="根据客户名称搜索")
		scroll(:top="88")
			.user-wrapper
				.item(v-for="(item,index) in info" :key="index" @click="handleClick(item)")
					.user-icon
						span(class="iconfont iconkehuxinxi")
					.user-info
						.info-name
							span(class="user-info-title") 客户名称：
							span(class="user-info-num") {{item.custName}}
						.info-name
							span(class="user-info-title") 客户编号：
							span(class="user-info-num") {{item.custCode}}
</template>

<script>
import Scroll from "../../components/Scroll";
import { loanReceiptParams } from "../../api/users";
import { userInfo } from "../../utils/dataMock";

export default {
  components: { Scroll },
  data() {
    const userMock = _ => {
      const userMocks = [];
      for (let i = 1; i <= 10; i++) {
        userMocks.push({
          id: i,
          custName: `客户${i}`,
          custCode: `编号${i}12324345r4`
        });
      }
      return userMocks;
    };
    return {
      userSearch: "",
      userInfo: userInfo,
      usersMock: userMock(),
      info: [],
      params: {
        queryType: "3"
      }
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleClick(item) {
      const custName = item.custName;

      this.$router.push({
        name: "userIndex",
        params: {
          queryType: "2",
          moduleName: "custmer",
          custName: custName,
          emplName: this.userInfo.emplName
        }
      });
    },
    //获取客户列表
    getList() {
      this.$Indicator.open();
      // this.userInfo.emplCode = "123456";
      this.userInfo.orgName = "南京";
      const params = Object.assign({}, this.params, userInfo);
      loanReceiptParams(this, params).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.$Indicator.close();
          this.info = res.data.data;
        }
      });
    },
    userChange() {
      this.userInfo.emplName = this.userSearch;
      this.getList();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.user-list {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  .user-search {
    width: 100%;
    height: px2rem(44);
    border: px2rem(1) solid #d6d6db;
    box-sizing: border-box;
    flex: 0 0 px2rem(44);
    @include columnCenter;
    .search {
      width: px2rem(359);
      box-sizing: border-box;
      height: px2rem(28);
      border-radius: px2rem(5);
      border: px2rem(1) solid #e6e6ea;
      text-align: center;
      color: #b2b2b2;
      font-size: px2rem(14);
      line-height: 1;
      &:focus {
        outline: none;
      }
      &::placeholder {
        text-align: center;
        color: #b2b2b2;
        font-size: px2rem(13);
      }
      &::-webkit-input-placeholder {
        padding-top: px2rem(3);
        line-height: normal;
      }
    }
  }
  .user-wrapper {
    width: 100%;
    flex: 1;
    padding-top: px2rem(8);
    @include columnCenter;
    .item {
      width: px2rem(354);
      height: px2rem(62);
      background-color: #fff;
      padding-left: px2rem(25);
      display: flex;
      margin-bottom: px2rem(8);
      .user-icon {
        flex: 0 0 px2rem(15);
        font-size: px2rem(17);
        color: #f7ab2f;
        line-height: px2rem(62);
        margin-right: px2rem(5);
      }
      .user-info {
        flex: 1;
        @include columnLeft;
        .info-name {
          font-size: px2rem(14);
          .user-info-title {
            color: #727272;
          }
          .user-info-num {
            color: #090909;
          }
          &:first-child {
            margin-bottom: px2rem(3);
          }
        }
      }
      &:hover,
      &:focus,
      &.active {
        background-color: #4e78de;
        .user-info {
          .info-name {
            .user-info-title {
              color: #ebebeb;
            }
            .user-info-num {
              color: #fff;
            }
            &:first-child {
              margin-bottom: px2rem(3);
            }
          }
        }
      }
    }
  }
}
</style>
