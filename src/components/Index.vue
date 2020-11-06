// 主页
<template>
  <div class="index">
    <!-- 头部 -->
    <van-sticky>
      <Header></Header>
    </van-sticky>
    <!-- 轮播 -->
    <Carousel></Carousel>
    <!-- 分类 -->
    <Type></Type>
    <!-- 列表 -->
    <List></List>
  </div>
</template>

<script>
import Header from "./Header";
import Carousel from "./Carousel";
import Type from "./Type";
import List from "./List";
export default {
  components: { Header, Carousel, Type, List },
  name: "",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang='less' scoped>
.index {
}
</style>

