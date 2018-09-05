<template>
  <div class="PageNav">
    <div class="PageNavBox">
      <div class="PageLogo">
        <img src="../assets/xtlogo.png">
        <span class="PageLogoTxt">
        <span>九品卡管家</span>
        <em>您身边的信用卡优化专家</em>
      </span>
      </div>
      <div class="PagePhone">
        <span>客户电话</span>
        <i><img src="../assets/phone.png"></i>
        <span>0571-85303811(9:00am-16:40pm)</span>
      </div>
    </div>

  </div>
</template>

<script >
    export default {
        name: "Xiangtengnav"
    }
</script>

<style scoped lang="scss">
 .PageNav{
   height: 70px;
   width: 100%;
   background: #fff;
   position: fixed;
   top:0;
   left: 0;
   z-index: 9999;
   .PageNavBox{
     height: 100%;
     width: 1200px;
     margin: 0 auto;
     .PageLogo{
       float: left;
       height: 40px;
       margin-top: 15px;
       img{
         width: 39px;
         height: 39px;
         display: inline-block;
       }
       .PageLogoTxt{
         display: inline-block;
         width: 133px;
         text-align: left;
         margin-left: 11px;
         position: relative;
         bottom: 3px;
         span{
           font-size: 15px;
           font-weight: bold;
         }
         em{
           display: block;
           font-size: 12px;
           color: #666666;
         }
       }
     }
     .PagePhone{
       float: right;
       height: 40px;
       margin-top: 15px;
       span{
         line-height: 40px;
       }
       i{
         height: 16px;
         width: 16px;
         display: inline-block;
         position: relative;
         top:2px;
         img{
           display: inline-block;
           width: 100%;
           height: 100%;
         }
       }
     }
     &:after{
       clear: both;
       margin: 0;
       padding: 0;
     }
   }
 }
</style>
