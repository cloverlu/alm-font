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
				span(v-else-if="operateTag === 3") 下一步
		scroll(:top="scrollTop" ref="scrollWrapper" )
			.loanIns-index-content
				.content(:class="footerShow ? 'footershow' : ''")
					loadInsList(v-if="hasChildRouter") 
					router-view(v-else)
				.footer(v-if="footerShow") 
					footerNext
</template>

<script>
import loadInsList from "../loanInspection/indexList";
import footerNext from "../loanInspection/components/footerNext";
import Scroll from "../../components/Scroll";
import { loanInspectionMixin } from "../../utils/mixin";
export default {
  components: { loadInsList, Scroll, footerNext },
  mixins: [loanInspectionMixin],
  data() {
    return {
      hasChildRouter: this.$route.params.hasChildRouter,
      title: "",
      operateTag: 1,
      footerShow: false,
      that: this,
      scrollTop: 44
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasChildRouter = to.name === "loanInspectionIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    const meta = to.meta;
    this.title = meta.title;
    this.footerShow = meta.footer;
    if (meta.tag === "operateIcon") {
      this.operateTag = 1;
    } else if (meta.tag === "resave") {
      this.operateTag = 2;
    } else if (meta.tag === "footerNext") {
      this.operateTag = 3;
    }
    this.hasChildRouter = to.name === "loanInspectionIndex";
    next();
  },

  mounted() {
    const meta = this.$route.meta;
    this.title = meta.title;
    this.footerShow = meta.footer;
    if (meta.tag === "operateIcon") {
      this.operateTag = 1;
    } else if (meta.tag === "resave") {
      this.operateTag = 2;
    } else if (meta.tag === "footerNext") {
      this.operateTag = 3;
    }
  },

  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.$nextTick(() => {
          this.$refs.scrollWrapper.scrollTo(0, 0);
        });
      }
    },
    // 监听是否点击了上一步，用vuex里的nextFooter属性
    prevFooter(val, oldval) {
      if (val !== oldval) {
        this.$nextTick(() => {
          this.$refs.scrollWrapper.scrollTo(0, 0);
        });
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
      this.$refs.scrollWrapper.scrollTo(0, 0);
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
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.16);
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
    display: flex;
    flex-direction: column;
    height: 100%;
    .content {
      width: 100%;
      // min-height: 100%;
      flex: 1;
      box-sizing: border-box;
      // &.footershow {
      //   // padding-bottom: px2rem(38);
      // }
    }
    .footer {
      width: 100%;
      height: px2rem(38);
      z-index: 100;
      // margin-top: px2rem(-38);
    }
  }
}
</style>
