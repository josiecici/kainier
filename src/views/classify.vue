<template>
  <div class="tree">
    <van-sticky>
      <van-nav-bar :title="routerTitle" left-text="返回" left-arrow @click-left="goBack">
        <template #right>
          <van-icon name="search" />
        </template>
      </van-nav-bar>
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>您的满意是我们最大的动力！</van-swipe-item>
          <van-swipe-item>款式多多，优惠多多！</van-swipe-item>
          <van-swipe-item>私人定制，满足您的需求！</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="上新" dot />
        <van-sidebar-item title="热门款式" />
        <van-sidebar-item title="火爆款式" />
        <van-sidebar-item title="客户最爱" />
        <van-sidebar-item title="优惠折扣" />
        <van-sidebar-item title="跳楼甩卖" />
      </van-sidebar>
    </van-sticky>
    <div class="right">
      <van-grid square :column-num="3">
        <van-grid-item v-for="(item,index) in imgObj" :key="index">
          <van-image @click="toDetails" :src="item.url" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeKey: 0,
      routerTitle: "",
      value: "",
      imgObj: [
        { url: require("../assets/img/1-1.jpg"), title: "测试文字如果" },
        {
          url: require("../assets/img/1-2.jpg"),
          title: "测试文字如果很长的话"
        },
        { url: require("../assets/img/1-3.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/1-4.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/1-5.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/1-6.jpg"), title: "测试文字如果很长" },
        { url: require("../assets/img/1-7.jpg"), title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" },
        { url: "", title: "测试文字如果很长" }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    toDetails() {
      console.log('这是this.routerTitle',this.routerTitle);
      this.$router.push({path:"/details",query:{title:this.routerTitle}});
    },
    goBack() {
      this.$router.push("index");
    },
    onChange(index) {
      console.log("这是index", index);
      if (index == 0) {
        this.imgObj = [
          { url: require("../assets/img/1-1.jpg"), title: "测试文字如果" },
          {
            url: require("../assets/img/1-2.jpg"),
            title: "测试文字如果很长的话"
          },
          { url: require("../assets/img/1-3.jpg"), title: "测试文字如果很长" },
          { url: require("../assets/img/1-4.jpg"), title: "测试文字如果很长" },
          { url: require("../assets/img/1-7.jpg"), title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" }
        ];
      }
      if (index == 1) {
        this.imgObj = [
          { url: require("../assets/img/1-4.jpg"), title: "测试文字如果很长" },
          { url: require("../assets/img/1-5.jpg"), title: "测试文字如果很长" },
          { url: require("../assets/img/1-6.jpg"), title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" }
        ];
      }
      if (index == 2) {
        this.imgObj = [
          { url: require("../assets/img/1-4.jpg"), title: "测试文字如果很长" },
          { url: require("../assets/img/1-7.jpg"), title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" },
          { url: "", title: "测试文字如果很长" }
        ];
      }
    }
  },
  mounted() {
    // console.log("这是this.$route.query", this.$route.query.title);
    this.routerTitle = this.$route.query.title;
  }
};
</script>

<style lang='less' scoped>
.tree {
  position: relative;
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .van-notice-bar {
    color: #ee0a24;
  }
  .right {
    position: absolute;
    width: 75%;
    top: 86px;
    right: 0;
  }
  img {
    width: 100%;
  }
}
</style>
<style>
.tree .van-nav-bar__text {
  color: rgb(126, 126, 126);
}
.tree .van-nav-bar .van-icon {
  color: rgb(126, 126, 126);
}
.tree .van-nav-bar__right .van-icon {
  font-size: 18px;
  color: #ee0a24;
}
.tree .van-sidebar {
  /* position: relative; */
  width: 25%;
}
</style>
