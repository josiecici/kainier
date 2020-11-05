<template>
  <div class="tree">
    <van-nav-bar title="标题" left-text="返回" left-arrow  @click-left="goBack">
      <!-- <template #right>
        <van-icon name="search" />
      </template> -->
    </van-nav-bar>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="上新" dot />
      <van-sidebar-item title="热门款式" />
      <van-sidebar-item title="火爆款式" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return { activeKey: 0 };
  },
  computed: {},
  watch: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
.tree {
}
</style>
