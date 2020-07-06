<!--
 * @Descripttion: 滚动条
 * @Author: penglu
 * @Date: 2020-06-04 10:02:46
-->
<template lang="pug">
	div.scroll-wrapper( 
		:class="{ 'no-scroll': ifNoScroll }"
		@scroll.passive="handleScroll"
		ref="scrollWrapper")
		slot
</template>

<script>
import { realPx } from "@/utils/utils";
import { normalMixin } from "../utils/mixin";

export default {
  mixins: [normalMixin],
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    },
    ifNoScroll: {
      type: Boolean,
      default: false
    },
    initPosition: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0
        };
      }
    }
  },
  watch: {
    scrollToPo(val) {
      this.$refs.scrollWrapper.scrollTo(val.x, val.y);
    }
  },
  mounted() {
    this.refresh();
    this.$nextTick(() => {
      setTimeout(() => {
        this.scrollTo(realPx(this.initPosition.x), realPx(this.initPosition.y));
      }, 1);
    });
  },
  methods: {
    handleScroll(e) {
      const offsetY =
        e.target.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.$emit("onScroll", offsetY);
    },
    scrollTo(x, y) {
      this.$refs.scrollWrapper.scrollTo(x, y);
    },
    refresh() {
      if (this.$refs.scrollWrapper) {
        this.$refs.scrollWrapper.style.height =
          window.innerHeight - realPx(this.top) - realPx(this.bottom) + "px";
        this.$refs.scrollWrapper.addEventListener("scroll", this.handleScroll);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/style/global.scss";

.scroll-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  @include scroll;
  &.no-scroll {
    overflow: hidden;
  }
}
</style>
