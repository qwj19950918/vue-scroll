<template>
  <div class="BoxRight">
    <ul class="BoxRightIcon">
      <li :class="{iconTive:pageid=='/page1'}"></li>
      <li :class="{iconTive:pageid=='/page2'}"></li>
      <li :class="{iconTive:pageid=='/page3'}"></li>
      <li :class="{iconTive:pageid=='/page4'}"></li>
    </ul>
    <ul class="BoxRightNav">
      <li :class="{rightTive:pageid=='/page1'}" @click="goone()"><span>信</span><span>用卡管理</span></li>
      <li :class="{rightTive:pageid=='/page2'}" @click="gotwo()"><span>智</span><span>能还款</span></li>
      <li :class="{rightTive:pageid=='/page3'}" @click="gothree()"><span>无</span><span>卡收款</span></li>
      <li :class="{rightTive:pageid=='/page4'}" @click="gofour()"><span>城</span><span>市赚客</span></li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router";

    export default {
      name: "Xiangtengright",
      data(){
          return{
            pagenum:this.pageid,
            transitionName:'',
            rrrnull:1,
            mypage:''
          }
      },
      props:[
        'pageid'
      ],
      methods:{
        goone(){
          let sections =this.$route.path.split('/page');
          let num = Number(sections[sections.length-1]);
          let _this = this;
          if(_this.PageScroll == true){
            router.push(`/page1`);
            // _this.rrrnull = 0;
            _this.$store.commit('getPageScroll',false);
            setTimeout(function () {
              // _this.rrrnull = 1;
              _this.$store.commit('getPageScroll',true);
            },1400);
            if(1>num){
              // _this.transitionName='slideDown';
              _this.$store.commit('getPageShow','slideUp');
            }else if (1<num){
              // _this.transitionName='slideUp';
              _this.$store.commit('getPageShow','slideDown');
            }
          }
        },
        gotwo(){
          let sections =this.$route.path.split('/page');
          let num = Number(sections[sections.length-1]);
          let _this = this;
          if(_this.PageScroll == true){
            router.push(`/page2`);
            // _this.rrrnull = 0;
            _this.$store.commit('getPageScroll',false);
            setTimeout(function () {
              // _this.rrrnull = 1;
              _this.$store.commit('getPageScroll',true);
            },1400);
            if(2>num){
              _this.$store.commit('getPageShow','slideUp');
              // _this.transitionName='slideDown';
            }else if (2<num){
              // _this.transitionName='slideUp';
              _this.$store.commit('getPageShow','slideDown');
            }
          }
        },
        gothree(){
          let sections =this.$route.path.split('/page');
          let num = Number(sections[sections.length-1]);
          let _this = this;
          if(_this.PageScroll == true){
            router.push(`/page3`);
            // _this.rrrnull = 0;
            _this.$store.commit('getPageScroll',false);
            setTimeout(function () {
              // _this.rrrnull = 1;
              _this.$store.commit('getPageScroll',true);
            },1400);
            if(3>num){
              _this.$store.commit('getPageShow','slideUp');
              // _this.transitionName='slideDown';
            }else if (3<num){
              _this.$store.commit('getPageShow','slideDown');
              // _this.transitionName='slideUp';
            }
          }
        },
        gofour(){
          let sections =this.$route.path.split('/page');
          let num = Number(sections[sections.length-1]);
          let _this = this;
          if(_this.PageScroll == true){
            router.push(`/page4`);
            // _this.rrrnull = 0;
            _this.$store.commit('getPageScroll',false);
            setTimeout(function () {
              // _this.rrrnull = 1;
              _this.$store.commit('getPageScroll',true);
            },1400);
            if(4>num){
              // _this.transitionName='slideDown';
              _this.$store.commit('getPageShow','slideUp');
              console.log('点击的页数大于当前的页数 下滑')
            }else if (4<num){
              // _this.transitionName='slideUp';
              _this.$store.commit('getPageShow','slideDown');
              console.log('点击的页数小于当前的页数 上滑')
            }
          }
        }
      },
      mounted(){
      },
      computed:{
        PageScroll(){
          return this.$store.state.nullscroll
        }
      }
    }
</script>

<style scoped lang="scss">
  .iconTive{
    width: 11px!important;
    height: 11px!important;
    background: #fe9205!important;
    border:3px solid #ffe4ca!important;
    margin: 10px 0 74.5px!important;
  }
  .rightTive{
    color: #fe9205;
    span:nth-child(1){
      font-size: 24px;
    }
    span:nth-child(2){
      font-size: 12px;
    }
  }
.BoxRight{
  position: fixed;
  right: 125px;
  top: 50%;
  z-index: 999999;
  transform: translateY(-50%);
  overflow: hidden;
  .BoxRightIcon{
    float: left;
    margin-right: 27px;
    li{
      margin: 6px 0 79.5px;
      width: 9px;
      height: 9px;
      background: #9d9d9d;
      border-radius: 50%;
      border:2px solid #e3deda;
    }
  }
  .BoxRightNav{
    float: right;
    color: #999;
    font-size: 18px;
    li{
      margin-bottom: 56px;
      cursor: pointer;
      text-align: left;
      height: 36px;
    }
  }
}
</style>
