<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/image/logo.png" alt="" />
    </div>
    <div class="link">
      <router-link to="/show">博客列表</router-link>
      <router-link to="/add">添加博客</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.header {
  height: 80px;
  background: #36a981;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 100%;
    img {
      height: 80%;
      margin: 10% 0 0 20px;
    }
  }
}
.link {
  padding-right: 20px;
  display: flex;
  a {
    display: block;
    padding: 8px 30px;
    margin-left: 30px;
    color: #fff;
    border-radius: 3px;
  }
  a:hover {
    background: #fff;
    color: #36a981;
  }
  .router-link-active{
  background: #fff;
    color: #36a981;
}
}

</style>
