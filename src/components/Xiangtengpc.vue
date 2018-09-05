<template>

  <div class="PageBox ">
    <PageNav></PageNav>
    <div class="PageBoxBody">
      <PageOne ></PageOne>
      <!--<PageTwo ></PageTwo>-->
      <!--<PageThree  ></PageThree>-->
      <!--<PageFour ></PageFour>-->
    </div>
    <PageFooter ></PageFooter>
  </div>
</template>

<script>
  import PageNav from './Xiangtengbanner'
  import PageOne from './Page1'
  import PageTwo from './Page2'
  import PageThree from './Page3'
  import PageFour from './Page4'
  import PageFooter from './Xiangtengfooter'
    export default {
      name: "xiangtengpc",
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 500,
        beforeChange: function (prev, next) {
          console.log('before', prev, next)
        },
        afterChange: function (prev, next) {
          console.log('after', prev, next)
        }
      },
      components:{
        PageNav,
        PageOne,
        PageTwo,
        PageThree,
        PageFour,
        PageFooter
      }
    }
</script>

<style scoped lang="scss">
  /*$nav-color: #F90;*/
  .PageBox{
    width: 100%;
  }
</style>
