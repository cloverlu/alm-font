<!--
 * @Descripttion: 
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!-- 公司信息 -->
    <div class="companyInformation">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coName">{{ DetailsOfIOU.orgName }}</span>
      </div>
      <div class="formBody">
        <mt-field
          class="textFiled"
          label="检查地点"
          placeholder="10"
          v-model="DetailsOfIOU.checkAddr"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="检查配合程度"
          placeholder="10"
          v-model="DetailsOfIOU.cooperate"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="生产经营场所变动情况"
          placeholder="10"
          v-model="DetailsOfIOU.addrChangedMsg"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="接待人员"
          placeholder="10"
          v-model="DetailsOfIOU.staff"
        ></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU } from "../../../utils/dataMock";
import { Field } from "mint-ui";
export default {
  components: { "mt-field": Field },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.companyInformation {
  width: 100%;
  box-sizing: border-box;

  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(17);
      top: 50%;
      left: px2rem(10);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(23);
      width: px2rem(120);
      line-height: px2rem(20);
      top: 50%;
      left: 21%;
      transform: translate(-50%, -50%);
      font-size: px2rem(15);
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }
  .formBody {
    .mint-cell {
      width: 100%;
      height: px2rem(44);
      background: rgba(255, 255, 255, 1);
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      opacity: 1;

      &:last-of-type {
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
}
</style>
