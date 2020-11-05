<template>
  <div class="list flex2 p10">
    <div class="box flex1">
      <div class="imgOne">
        <img class="o6" src="../assets/img/bg.jpg" alt="">
        <div class="msg flex1-2c">
          <div class="c-333 f-s14 f-w600 l-h100 p1">品牌相关</div>
        </div>
      </div>
      <div class="imgOne">
        <img class="o10" src="../assets/img/jiqi.gif" alt="">
        <div class="msg flex1-2c">
          <div class="c-fff f-s14 f-w600 l-h100 p1">工厂相关</div>
        </div>
      </div>
    </div>
    <div class="box flex1">
      <div class="imgOne">
        <img class="o10" src="../assets/img/cooperation.jpg" alt="">
        <div class="msg flex1-2c">
          <div class="c-fff f-s14 f-w600 l-h100 p1">商务合作</div>
        </div>
      </div>
      <div class="imgOne">
        <img class="o10" src="../assets/img/tel.jpg" alt="">
        <div class="msg flex1-2c">
          <div class="c-fff f-s14 f-w600 l-h100 p1">联系我们</div>
        </div>
      </div>
    </div>
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
.list {
  .box {
    width: 100%;
  }
  .imgOne {
    position: relative;
    margin: 5px;
    background-color: rgba(235, 235, 235, 0.836);
    width: 50%;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      height: 88px;
      border-radius: 5px;
    }
    .msg {
      border-radius: 5px;
      position: absolute;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.24);
      left: 0px;
      bottom: 5px;
    }
  }
}
</style>
