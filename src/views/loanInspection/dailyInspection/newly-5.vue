<!--
 * @Descripttion: 新增 5
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!-- 公司信息 -->
    <div class="newly5"></div>
  </div>
</template>

<script>
import { DetailsOfIOU } from "../../../utils/dataMock";
import almSelect from "../components/select";
import { Field } from "mint-ui";
export default {
  components: {
    // "mt-field": Field,
    // almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,

      params: {}
    };
  },
  methods: {
    getSelect1(data) {
      this.params.securityKind = data.key;
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    // nextFooter(val, oldval) {
    //   if (val !== oldval) {
    //     // 将数据存入vuex里的setDefinite12里
    //     this.setDefinite12({ params: this.params });
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.newly5 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>

<style lang="scss">
@import "../../../assets/style/global.scss";
</style>
