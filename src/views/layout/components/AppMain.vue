<template>
  <section class="app-main">
    <transition name="fade-trasform" mode="out-in">
      <!-- <route-view :key="key"></route-view> -->
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // 刷新 请求
    // key() {
    //  return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    // }
  }
}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
