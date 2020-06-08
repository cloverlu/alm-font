<!--
 * @Descripttion: 下拉组件集成
 * @Author: penglu
 * @Date: 2020-06-05 16:29:20
-->

<template lang="pug">
	#trigger(:class="fontColor") {{defaultValue}}
</template>

<script>
import MobileSelect from "mobile-select";
export default {
  props: ["selectData", "defaultValue", "title", "fontColor"],
  mounted() {
    this.mobileSelect();
  },
  methods: {
    mobileSelect() {
      new MobileSelect({
        trigger: "#trigger",
        title: this.title,
        wheels: [{ data: this.selectData }],
        callback: (indexArr, data) => {
          this.$emit("getSelectValue", data);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.blue {
  color: #4e78de !important;
}
</style>
