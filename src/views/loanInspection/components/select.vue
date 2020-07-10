<!--
 * @Descripttion: 下拉组件集成
 * @Author: penglu
 * @Date: 2020-06-05 16:29:20
-->

<template lang="pug">
	.trigger(:id= "triggerId" :class="fontColor") {{defaultval}}
</template>

<script>
import MobileSelect from "mobile-select";
export default {
  props: ["selectData", "defaultValue", "title", "fontColor", "triggerId"],
  data() {
    return {};
  },
  computed: {
    defaultval: function() {
      var defaultval = "";
      if (this.selectData) {
        this.selectData.filter(item => {
          if (this.defaultValue === item.key) {
            defaultval = item.value;
          }
        });
      }
      return defaultval;
    }
  },
  mounted() {
    this.mobileSelect();
  },
  watch: {},
  methods: {
    mobileSelect() {
      if (this.selectData) {
        new MobileSelect({
          trigger: "#" + this.triggerId,
          title: this.title,
          wheels: [{ data: this.selectData }],
          callback: (indexArr, data) => {
            this.$emit("getSelectValue", data);
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blue {
  color: #4e78de !important;
}
</style>
