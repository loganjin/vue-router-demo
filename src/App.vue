<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->

    <router-link :to="'/user/' + id">用户</router-link>

    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- 使用参数方式1：<router-link></router-link> -->
    <router-link :to="{
      path: '/profile',
      query: {
        name: 'loganjin',
        age: '30'
      }
    }">档案</router-link>

    <!-- 使用参数方式2：JavaScript代码 -->
    <!-- <button @click="userClick">用户</button> -->
    <!-- <button @click="profileClick">档案</button> -->
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

  //   userClick() {
  //     this.$router.push('/user/' + this.id)
  //   },
  //   profileClick() {
  //     // this.$router.push('/profile')
  //     this.$router.push({
  //       path: '/profile',
  //       query: {
  //         name:'loganjin',
  //         age: 18
  //       }
  //     })
  //   }
  // },

  // 动态路由
  data() {
    return {
      id: 'loganjin'
    }
  },
}
</script>

<style>

</style>
