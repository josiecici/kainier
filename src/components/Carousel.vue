<template>
  <div class="carousel">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/img/1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/2.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/3.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/4.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/5.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
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
.carousel {
  img {
    width: 100%;
    height: 230px;
  }
}
</style>
