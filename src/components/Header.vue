<template>
  <div class="header flex1-2c b-c-ccc">
    <img src="../assets/img/logo.png" alt="">
    <div class="title f-s14">凯尼儿</div>
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
.header {
  background-image: url("../assets/img/top.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  img {
    width: 60px;
    height: 50px;
  }
  .title {
    // font-size:14px
  }
}
</style>
