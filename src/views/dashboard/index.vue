<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
    <div class="dashboard-text">avatar: <img :src="avatar" ></div>
    <div class="dashboard-intro">
      <p>本项目：<a href="https://github.com/Panseng/vue-project" target="_blank">源代码</a></p>
      <p>本项目：<a href="https://github.com/PanJiaChen/vue-admin-template" target="_blank">参考源</a></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'avatar'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text, &-intro {
    font-size: 30px;
    line-height: 46px;
  }
  &-intro a{
    color: #40E0D0;
  }
  &-intro a:hover{
    color: grey;
  }
}
img{
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

</style>
