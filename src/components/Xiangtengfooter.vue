<template>
    <div class="PageFooter">
      <div class="PageFooterBox">
        <div class="PageTop">
          <span>版权：杭州祥腾科技网络有限公司</span>
          <span>备案号：浙ICP备18000001号</span>
        </div>
        <div class="PageBottom">
          <span>地址：浙江省杭州市西湖区文一西路830号3号楼509室</span>
          <span>客服电话：0571-85303811 （9:00-16:00）</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Xiangtengfooter"
    }
</script>

<style scoped lang="scss">
  .PageFooter{
    width: 100%;
    height: 213px;
    background: #333333;
    .PageFooterBox{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      .PageTop{
        span{
          &:nth-child(1){
            margin: 80px 20px 30px;
          }
        }
      }
      .PageBottom{
        span{
          &:nth-child(1){
            margin: 0 20px ;
          }
        }
      }
      span{
        display: inline-block;
        color: #838383;

      }
    }
  }
</style>
