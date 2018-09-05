<template>
  <div class="PageBox">
    <thisbanner></thisbanner>
    <div class="PageBoxContent">

    </div>
  </div>
</template>

<script>
  import thiscode from './Xiangtengerweima'
  import thisbanner from './Xiangtengbanner'
  export default {
    name: "Page0",
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
      thiscode,
      thisbanner
    }
  }
</script>

<style scoped lang="scss">
  .PageBox{
    overflow: hidden;
    height: 970px;
    width: 100%;
    background: #fef9f0;
    .PageBoxContent{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      .PageBoxContentImg{
        position: absolute;
        width: 680px;
        height: 580px;
        display: block;
        top:189px;
        left: 0;
      }
      .PageBoxContentTxt{
        width: 356px;
        height: 356px;
        position: absolute;
        top:263px;
        right: 0;

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
        right: 190px;
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
    right: 20px;
    bottom: 400px;

  }
</style>
