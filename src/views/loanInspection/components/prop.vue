<!--
 * @Descripttion: 
 * @Author: penglu
 * @Date: 2020-07-16 09:42:27
-->
<template lang="">
  <mt-popup class="definite-prop" v-model="propV" position="bottom">
    <div class="definite-prop-top">
      <div class="cancel" @click="cancel">取消</div>
      <div class="submit" @click="submit">确定</div>
    </div>
    <div class="definite-prop-content">
      <mt-checklist class="definite-checklist" v-model="value" :options="info">
      </mt-checklist>
    </div>
  </mt-popup>
</template>

<script>
import { Popup, Checklist } from "mint-ui";
export default {
  components: { "mt-popup": Popup, "mt-checklist": Checklist },
  props: ["popupVisible", "info", "defaultValue"],
  data() {
    return {
      propV: this.popupVisible,
      clickfalse: false,
      value: this.defaultValue,
      options: [
        {
          label: "disabled ",
          value: "valueF"
        },
        {
          label: "checked",
          value: "valueE"
        },
        {
          label: "optionA",
          value: "valueA"
        },
        {
          label: "optionB",
          value: "valueB"
        }
      ]
    };
  },
  mounted() {},
  watch: {
    popupVisible(val, oldval) {
      this.propV = val;
    },
    propV(val, oldval) {
      this.$emit("change", val);
    }
  },
  computed: {},
  methods: {
    select(type, event) {
      this.typeSelected = type;
      this.$emit("change", type);
    },

    submit() {
      this.$emit("checkData", this.value);
      this.propV = false;
    },
    cancel() {
      this.propV = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
// 弹出框
.definite-prop {
  width: 100%;
  padding: 0 px2rem(15);
  box-sizing: border-box;
  .definite-prop-top {
    width: 100%;
    height: px2rem(30);
    line-height: px2rem(30);
    display: flex;
    font-size: px2rem(14);
    color: #4e78de;
    border-bottom: 1px solid rgba(229, 229, 229, 1);
    .cancel {
      flex: 1;
      text-align: left;
    }
    .submit {
      flex: 1;
      text-align: right;
    }
  }
  .definite-prop-content {
    width: 100%;
  }
}
</style>

<style lang="scss">
.definite-checklist {
  .mint-cell-wrapper {
    padding: 0 !important;
  }
}
</style>
