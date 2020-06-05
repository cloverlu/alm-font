<!--
 * @Descripttion: 流程1：检查申请明细-1
 * @Author: penglu
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
	div
		<my-btn type="default">default</my-btn>
		<my-btn type="primary">primary</my-btn>
		<my-btn type="danger">danger</my-btn>
</template>

<script>
import { Button } from "mint-ui";
export default {
  components: { "my-btn": Button }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
</style>
