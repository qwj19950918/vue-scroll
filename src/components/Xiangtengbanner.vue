<template>
    <div class="XiangtengBanner">
      <img src="../assets/banner.png" >
      <span>

      </span>
    </div>
</template>

<script>
    export default {
        name: "Xiangtengbanner",

    }
</script>

<style scoped lang="scss">
  .XiangtengBanner{
    margin-top: 70px;
    width: 100%;
    height: 470px;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
    span{
      position: absolute;
      top: 68%;
      left: 29.9%;
      z-index: 99;
      width: 15%;
      height: 86px;
      cursor: pointer;
    }
  }
</style>
