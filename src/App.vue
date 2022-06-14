<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  // methods: {
  //   // 路由代码跳转
  //   homeClick() {
  //     this.$router.push('/home')
  //   },
  //   aboutClick() {
  //     this.$router.push('/about')
  //   },
  // }

  // 动态路由
  data() {
    return {
      userId: 'loganjin'
    }
  },
}
</script>

<style>

</style>
