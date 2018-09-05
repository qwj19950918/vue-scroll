<template>
    <div class="PageBox">
        <div class="PageBoxContent">
          <div class="PageBoxContentImg">
            <img src="../assets/page1bg.png" >
          </div>
          <div class="PageBoxContentTxt">
            <span>信用卡管理</span>
            <span>信用卡优化专家</span>
            <span>导入电子账单，到期自动还款，不逾期，按时还款，多卡管理</span>
          </div>
          <div class="PageBoxContentBtn" @mouseover="thisshow()" @mouseout="thishide()" >
              立即下载
          </div>
          <thiscode v-show="codeshow" ></thiscode>
        </div>
    </div>
</template>

<script>
  import thiscode from './Xiangtengerweima'
    export default {
      name: "Page1",
      data(){
        return {
          codeshow:false
        }
      },
      methods:{
        thisshow(){
          this.codeshow = true
        },
        thishide(){
          this.codeshow = false
        }
      },
      components:{
        thiscode
      }
    }
</script>

<style scoped lang="scss">
  .PageBox{
    height: 100%;
    width: 100%;
    background: #fef9f0;
    .PageBoxContent{
      width: 1400px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      .PageBoxContentImg{
        position: absolute;
        width: 786px;
        height: 634px;
        display: block;
        top:189px;
        left: 0;
        img{
          width: 604px;
          height: 540px;
        }
      }
      .PageBoxContentTxt{
        width: 356px;
        height: 356px;
        position: absolute;
        top:263px;
        right: 200px;

        span{
          display: block;
          text-align: left;
        }
        span:nth-child(1){
          font-size: 42px;
          font-weight: 300;
        }
        span:nth-child(2){
          font-size: 24px;
          font-weight: 200;
          margin-top: 15px;
        }
        span:nth-child(3){
          margin-top: 42px;
          font-size: 18px;
          font-weight: 100;
        }
      }
      .PageBoxContentBtn{
        width: 166px;
        height: 58px;
        display: block;
        border-radius: 10px;
        background:-webkit-linear-gradient(left,#ff8d19,#feb213);
        background:-o-linear-gradient(right,#ff8d19,#feb213);
        background:-moz-linear-gradient(right,#ff8d19,#feb213);
        background:linear-gradient(to right,#ff8d19,#feb213);
        position: absolute;
        top: 534px;
        right: 390px;
        color: #fff;
        line-height: 58px;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
  .PageCode{
    width: 220px;
    height: 238px;
    background: url("../assets/erweima.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 265px;
    bottom: 450px;

  }
</style>
