<!--
 * @Descripttion: 借据列表信息-1
 * @Author: penglu
 * @Date: 2020-06-12 14:17:04
-->

<template lang="pug">
	.receipt-1-wrapper
		.definite-1-title
			span(class="colum-blue")
			span(class="title") {{$route.params.custName}}
		.receipt-content
			.receipt-content-item(v-for="item in info" :key="item.id" @click="handleClick(item.billNo)")
				.item-one
					span(class="tag") 借据编号
					span(class="info") {{item.billNo}}
				.item-two
					.item-two-coloumn
						span(class="tag") 借据起期
						span(class="info") {{item.billBeginDate}}
					.item-two-coloumn
						span(class="tag") 借据止期
						span(class="info") {{item.billEndDate}}
				.item-two
					.item-two-coloumn
						span(class="tag") 借据金额
						span(class="info") {{item.billAmout}}
					.item-two-coloumn
						span(class="tag") 借据余额
						span(class="info") {{item.billBlance}}

</template>

<script>
import { receipt1 } from "../../utils/dataMock";
import { loanReceiptParams } from "../../api/users";
export default {
  data() {
    return {
      info: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        name: "definiteUserAll",
        params: {
          billNo: id
        }
      });
    },
    getList() {
      this.$Indicator.open();
      var params = {
        queryType: this.$route.params.queryType,
        custName: this.$route.params.custName,
        emplName: this.$route.params.emplName
      };
      loanReceiptParams(this, params).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.$Indicator.close();
          this.info = res.data.data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.receipt-1-wrapper {
  width: 100%;
  height: 100%;
  .receipt-content {
    padding: 0 px2rem(16);
    box-sizing: border-box;
    .receipt-content-item {
      width: 100%;
      padding: px2rem(10);
      box-sizing: border-box;
      background-color: #fff;
      border-radius: px2rem(3);
      margin-bottom: px2rem(10);
      &:hover,
      &:focus {
        background: rgba(78, 120, 222, 0.81);
      }
      .item-one,
      .item-two {
        width: 100%;
        height: px2rem(20);
        line-height: px2rem(20);
        font-size: px2rem(14);
      }
      .item-one {
        display: flex;
        .tag {
          flex: 0 0 px2rem(80);
          text-align: left;
          color: #727272;
        }
        .info {
          flex: 1;
          color: #090909;
        }
      }
      .item-two {
        display: flex;
        margin-top: px2rem(8);
        .item-two-coloumn {
          flex: 1;
          display: flex;
          .tag {
            text-align: left;
            flex: 0 0 px2rem(80);
            color: #727272;
          }
          .info {
            flex: 1;
            color: #090909;
          }
        }
      }
    }
  }
}
</style>
