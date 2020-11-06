<template>
  <div class="details m-b50">
    <van-sticky>
      <div class="header">
        <van-nav-bar title="产品详情" left-text="返回" left-arrow @click-left="goBack">
        </van-nav-bar>
      </div>
    </van-sticky>
    <div class="imgList">
      <van-grid :column-num="1" :border="false">
        <van-grid-item v-for="(item,index) in imgObj" :key="index">
          <van-image :src="item.url" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="msg p10 flex2 c-title">
      <!-- <div class="title flex1-2c f-s16 m-b10">详细信息</div> -->
      <van-divider>详细信息</van-divider>
      <div class="content flex1">
        <div class="left flex2">
          <div class="flex1 m-b3">
            <div>产品名称：</div>
            <div>素棉麻</div>
          </div>
          <div class="flex1 m-b3">
            <div>产品规格：</div>
            <div>米</div>
          </div>
          <div class="flex1 m-b3">
            <div>产品颜色：</div>
            <div>红，紫，粉</div>
          </div>
          <div class="flex1 m-b3">
            <div>产品销量：</div>
            <div>99米+</div>
          </div>
        </div>
        <div class="right">
          <div class="flex1 m-b3">
            <div>价格：</div>
            <div>128/米</div>
          </div>
          <div class="flex1 m-b3">
            <div>材料：</div>
            <div>20%麻+80%棉</div>
          </div>
          <div class="flex1 m-b3">
            <div>产品编号：</div>
            <div>m456632</div>
          </div>
          <div class="flex1 m-b3">
            <div>产品库存：</div>
            <div>99米+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="msg p10 flex2 c-title">
      <!-- <div class="title flex1-2c f-s16 m-b10">推荐指数</div> -->
      <van-divider>推荐指数</van-divider>
      <div class="flex2">
        <div class="flex1-jsc m-b3">舒适度：
          <van-rate v-model="value3" readonly />
        </div>
        <div class="flex1-jsc m-b3">耐用度：
          <van-rate v-model="value4" readonly />
        </div>
        <div class="flex1-jsc m-b3">遮光度：
          <van-rate v-model="value4" readonly />
        </div>
      </div>
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <!-- <van-tabbar-item>
          <span>联系我们</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item> -->
        <!-- <van-tabbar-item icon="phone-o">联系我们</van-tabbar-item>
        <van-tabbar-item icon="coupon-o">优惠券</van-tabbar-item> -->
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      routerTitle: "",
      imgObj: [
        { url: require("../assets/img/d-1-3.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/d-1-4.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/d-1-5.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/d-1-1.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/d-1-2.gif"), title: "测试文字如果很长" }
      ],
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    goBack() {
      this.$router.push({
        path: "classify",
        query: { title: this.$route.query.title }
      });
    }
  },
  mounted() {
    console.log("这是this.$route.query.title", this.$route.query.title);
    this.routerTitle = this.$route.query.title;
  }
};
</script>

<style lang='less' scoped>
.details {
  //   background-image: url("../assets/img/repeat.jpg");
  .header {
  }
  .imgList {
    img {
      width: 100%;
    }
  }
  .msg {
    // background-color: #fff;
    .content > div {
      width: 50%;
    }
    .title {
      border-radius: 5px;
      width: 100%;
    }
    .left {
    }
    .right {
    }
  }
  .footer {
  }
}
</style>
<style>
.details .van-nav-bar__text {
  color: rgb(126, 126, 126);
}
.details .van-nav-bar .van-icon {
  color: rgb(126, 126, 126);
}
</style>
