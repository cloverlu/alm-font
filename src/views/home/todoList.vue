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
import { todoListTitle, userInfo } from "../../utils/dataMock.js";
import { getToDoList } from "../../api/home";
import { Toast } from "mint-ui";
import Scroll from "../../components/Scroll";
// import global_ from '../../utils/global'
import { GetQueryValue } from "../../utils/utils";
export default {
  components: { Scroll },
  data() {
    return {
      todoListTitle: todoListTitle,
      userInfo: userInfo,
      list: []
      // userParams: global_.param
    };
  },
  created() {},
  mounted() {
    var params = {};
    if (GetQueryValue("app") === "youjie") {
      params = {
        emplName: GetQueryValue("userName"),
        orgCode: GetQueryValue("instId"),
        orgName: GetQueryValue("instName")
      };
    } else {
      // alert('没有获取到用户信息')
      params = {
        emplName: "金林",
        orgCode: "12222",
        orgName: "南京"
      };
    }
    this.getList(params);
    // const userInfo = {
    // 	emplName: "金林",
    // 	orgCode : "12222",
    // 	orgName:"南京"
    // };
    // this.getList(userInfo);
    // const param = sessionStorage.getItem("userInfo")
    // if(param){
    // 	let JsonParamP = {}
    // 	try{
    // 			JsonParamP = JSON.parse(param)
    // 			const params={
    // 				emplName:JsonParamP.userName,
    // 				orgCode:JsonParamP.instId,
    // 				orgName:JsonParamP.instName
    // 			}
    // 			alert(params.emplName)
    // 			this.getList(params);

    // 	}catch(e){
    // 			// debugger 看看报的什么错误, 正式环境注释掉alert
    // 			// 不出意外的话，可能跟之前存储的脏数据有关系。
    // 			alert(e.toString())
    // 			JsonParamP = {};
    // 	}
    // }
    // window.addEventListener('getUserInfo',function(res){
    // 	alert('wqefregergkt')
    // 	  alert(typeof res.detail.userInfo)
    //     alert(JSON.stringify(res.detail.userInfo))
    // });
  },
  methods: {
    handleClick(id) {
      if (id === 2) {
        this.$router.push({
          name: "loanInspectionIndex",
          params: {
            moduleName: "loanInspection"
          }
        });
      } else if (id === 1) {
        this.$router.push({
          name: "approvalIndex",
          params: {
            moduleName: "approve"
          }
        });
      }
    },
    getList(params) {
      this.$Indicator.open();
      getToDoList(this, { params }).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.$Indicator.close();
          res.data.dataList.filter((item, index) => {
            this.todoListTitle.filter((item2, index2) => {
              if (item.itemType === item2.id.toString()) {
                item2.warningNumber = item.itemRecordNum;
                item2.postCode = item.postCode;
              }
            });
          });
        }
      });
    }
    // getUserInfo() {
    // 	alert("成功获取用户信息");
    // 	let xui = requireModuleJs("xui");
    //   let obj = xui.getUserInfo();
    // 	let token = xui.getDeviceTokens();
    // 	alert(requireModuleJs("xui"));
    //   alert(obj);
    //   alert(token);
    //   // await this.getList();
    // },
    // GetQueryValue(queryName) {
    //   var query = decodeURI(window.location.search.substring(1));
    //   var vars = query.split("&");
    //   for (var i = 0; i < vars.length; i++) {
    //     var pair = vars[i].split("=");
    //     if (pair[0] == queryName) {
    //       return pair[1];
    //     }
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../assets/style/global.scss";
.todo-list {
  width: 100%;
  height: 100%;
  border-top: px2rem(1) solid #d6d6db;
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
