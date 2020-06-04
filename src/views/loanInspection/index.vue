<!--
 * @Descripttion: 贷后检查框架
 * @Author: penglu
 * @Date: 2020-06-04 14:25:47
-->
<template lang="pug">
	.loanIns-index
		.loanIns-index-header
			.arrow-back(@click="back")
				span(class="iconfont iconfanhui")
			.title {{title}}
			.operate
				span(class="iconfont iconshaixuan" v-if="operateTag === 1")
				span(v-else-if="operateTag === 2") 保存
		.loanIns-index-content
			scroll(:top="46")
				loadInsList(v-if="hasChildRouter")
				router-view(v-else)
</template>

<script>
import loadInsList from "../loanInspection/indexList";
import Scroll from "../../components/Scroll";
export default {
  components: { loadInsList, Scroll },
  data() {
    return {
      hasChildRouter: this.$route.params.hasChildRouter,
      title: "",
      operateTag: 1
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasChildRouter = to.name === "loanInspectionIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    const meta = to.meta;
    this.title = meta.title;
    if (meta.tag === "operateIcon") {
      this.operateTag = 1;
    } else if (meta.tag === "resave") {
      this.operateTag = 2;
    }
    this.hasChildRouter = to.name === "loanInspectionIndex";
    next();
  },

  mounted() {
    const meta = this.$route.meta;
    this.title = meta.title;
    if (meta.tag === "operateIcon") {
      this.operateTag = 1;
    }
  },

  watch: {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.loanIns-index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .loanIns-index-header {
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    position: relative;
    display: flex;
    padding: 0 px2rem(16) 0 px2rem(16);
    box-sizing: border-box;
    .arrow-back {
      color: #000000;
      font-size: px2rem(17);
      flex: 0 0 px2rem(17);
    }
    .title {
      color: #090909;
      font-size: px2rem(15);
      flex: 1;
      text-align: center;
    }
    .operate {
      flex: 0 0 px2rem(42);
      color: #717171;
      font-size: px2rem(14);
      text-align: right;
    }
  }
  .loanIns-index-content {
    flex: 1;
    background-color: #f7f7f7;
  }
}
</style>
