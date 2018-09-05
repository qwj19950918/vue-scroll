<template>
  <div id="app" :class="{thisHide:hidenum<4}" @mousewheel="thisWheel()">
    <div class="BigBox">
      <PageNav></PageNav>
      <PageRight :pageid="pagenum"></PageRight>
      <transition :name="Pageshow">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  const MAXPAGE = 4;
  const MINPAGE =0;
  import PageNav from './components/Xiangtengnav'
  import PageRight from './components/Xiangtengright'
export default {
  name: 'App',
  data(){
    return {
      transitionName : '',
      sssnull:true,
      pagenum:'',
      wwwnull:true,
      hidenum:'',
      mytop:'',
    }
  },
  methods:{
    thisWheel(){
      if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", this.myWheel, false);
      }//兼容火狐
      document.onmousewheel = this.myWheel;//其他浏览器

    },
    myWheel(e) {
      let _this =this;
      e = e || window.event;
      if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            _this.swiperdown();
            _this.getScrollTop();
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
          _this.swiperup();
        }
      } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail > 0) { //当滑轮向上滚动时
            _this.swiperdown();
            _this.getScrollTop();
        }
        if (e.detail < 0) { //当滑轮向下滚动时
          _this.swiperup();
          _this.getScrollTop();
        }
      }
    },
    //下滑
    swiperup(){
      let _this = this;
      if(_this.PageScroll == true){
        // _this.PageScroll = false;
        _this.$store.commit('getPageScroll',false);
        let sections =_this.$route.path.split('/page');
        let num = Number(sections[sections.length-1]) + 1;
        if(num > MAXPAGE){
          // return
        }else if(num <= MAXPAGE){
          _this.$store.commit('getPageShow','slideUp');
          // _this.transitionName = 'slideUp';
          _this.$router.push(`page${num}`);
        }
        setTimeout(function () {
          _this.$store.commit('getPageScroll',true);
        },1400);
      }
    },
    swiperdown(){
      let _this =this;
      if(_this.PageScroll == true){
        // _this.PageScroll = false;
        _this.$store.commit('getPageScroll',false);
        let sections =_this.$route.path.split('/page');
        let num = Number(sections[sections.length-1]) - 1;
        if(num < MINPAGE){
          // return
        }else if(num >=MINPAGE){
          if(_this.mytop==0){
            _this.$store.commit('getPageShow','slideDown');
            // _this.transitionName = 'slideDown';
            _this.$router.push(`page${num}`);
          }
        }
        setTimeout(function () {
          // _this.PageScroll = true;
          _this.$store.commit('getPageScroll',true);
        },1400)
      }
    },
    getScrollTop() {
      let scrollPos;

      if (window.pageYOffset) {
        scrollPos = window.pageYOffset; }
      else if (document.compatMode && document.compatMode != 'BackCompat')
      { scrollPos = document.documentElement.scrollTop; }
      else if (document.body) { scrollPos = document.body.scrollTop; }
      this.mytop = scrollPos;
      return scrollPos;
    }
  },
  updated(){
    let _this = this;
    this.pagenum=this.$route.path;
    let sections =_this.$route.path.split('/page');
    let num = Number(sections[sections.length-1]);
    _this.hidenum = num;
    // this.transitionName='slideUp';

  },
  components:{
    PageNav,
    PageRight
  },
  computed:{
    Pageshow(){
      return  this.$store.state.transitionName
    },
    PageScroll(){
      return this.$store.state.nullscroll
    }

  },
  watch:{

  }
}
</script>

<style lang="scss">
  html{
    height: 100% ;
  }
  body{
    margin: 0;
    height: 100% ;
    line-height: 1;
    font-size: 16px;
    width: 100%;
  }
  .BigBox{
    height: 100% ;
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  *{margin: 0;padding: 0;list-style: none;}

  /*
  KISSY CSS Reset
  理念：1. reset 的目的不是清除浏览器的默认样式，这仅是部分工作。清除和重置是紧密不可分的。
  2. reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
  3. reset 期望提供一套普适通用的基础样式。但没有银弹，推荐根据具体需求，裁剪和修改后再使用。
  特色：1. 适应中文；2. 基于最新主流浏览器。
  维护：玉伯<lifesinger@gmail.com>, 正淳<ragecarrier@gmail.com>
   */

  /** 清除内外边距 **/
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */ {
    margin: 0;
    padding: 0;
  }

  /** 设置默认字体 **/
  body,
  button, input, select, textarea /* for ie */ {
    font: 12px/1.5 tahoma, arial, \5b8b\4f53, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 { font-size: 100%; }
  address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
  code, kbd, pre, samp { font-family: courier new, courier, monospace; } /* 统一等宽字体 */
  small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

  /** 重置列表元素 **/
  ul, ol { list-style: none; }

  /** 重置文本格式元素 **/
  a { text-decoration: none; }
  a:hover { text-decoration: underline; }


  /** 重置表单元素 **/
  legend { color: #000; } /* for ie6 */
  fieldset, img { border: 0; } /* img 搭车：让链接里的 img 无边框 */
  button, input, select, textarea { font-size: 100%; } /* 使得表单元素在 ie 下能继承字体大小 */
  /* 注：optgroup 无法扶正 */

  /** 重置表格元素 **/
  table { border-collapse: collapse; border-spacing: 0; }

  /* 清除浮动 */
  .ks-clear:after, .clear:after {
    content: '\20';
    display: block;
    height: 0;
    clear: both;
  }
  .ks-clear, .clear {
    *zoom: 1;
  }
    #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100% ;
  /*overflow: hidden;*/
}
  .slideUp-enter{
    transform: translate3d(0,0,0);
  }
  .slideUp-enter-to{
    transform: translate3d(0,-100%,0);
  }
  .slideUp-enter-active{
    transition: 1s;
  }
  .slideUp-leave{
    transform: translate3d(0,0,0);
  }
  .slideUp-leave-to{
    transform: translate3d(0,-100%,0);
  }
  .slideUp-leave-active{
    transition: 1s
  }



  .slideDown-enter{
    transform: translate3d(0,-200%,0);
  }
  .slideDown-enter-to{
    transform: translate3d(0,-100%,0);
  }
  .slideDown-enter-active{
    transition: 1s;
  }
  .slideDown-leave{
    transform: translate3d(0,0,0);
  }
  .slideDown-leave-to{
    transform: translate3d(0,100%,0);
  }
  .slideDown-leave-active{
    transition: 1s;
  }
  .thisHide{
    overflow: hidden!important;
  }
</style>
