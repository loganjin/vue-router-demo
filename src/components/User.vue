<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户相关内容，嘿嘿嘿</p>
        <h2>{{$route.params.id}}</h2>
    </div>
</template>

<script>
  export default {
      name: "User",
      created() {
        console.log("user created");
      },
      destroyed() {
        console.log("user destroyed");
      },
  }
</script>

<style scoped>
    
</style>