<template>
  <div class="type flex2 p10">
    <div class="top flex1-sc m-b5">
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/6.jpg" alt="">
        <div class="f-s12">棉麻</div>
      </div>
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/7.jpg" alt="">
        <div class="f-s12">透纱</div>
      </div>
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/8.jpg" alt="">
        <div class="f-s12">丝绸</div>
      </div>
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/9.jpg" alt="">
        <div class="f-s12">印花</div>
      </div>
    </div>
    <div class="top flex1-sc">
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/10.jpg" alt="">
        <div class="f-s12">立体</div>
      </div>
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/11.jpg" alt="">
        <div class="f-s12">混合</div>
      </div>
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/12.jpg" alt="">
        <div class="f-s12">刺绣</div>
      </div>
      <div class="flex2-2c" @click="toClass">
        <img class="m-b5" src="../assets/img/13.jpg" alt="">
        <div class="f-s12">订制</div>
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
  methods: {
    toClass(e) {
      // console.log('这是e',e,e.currentTarget,e.currentTarget.innerText);
      this.$router.push({
        path: "/classify",
        query: { title: e.currentTarget.innerText }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.type {
  background-color: rgb(247, 247, 247);
  img {
    width: 40px;
    height: 40px;
    background-color: rgb(241, 241, 241);
    border-radius: 40px;
  }
}
</style>
