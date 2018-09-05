# Vue-scroll

> 自己写的一个鼠标上下滑动的PC端页面，以后有类似的需求，直接可以用这个。

# 起始

<div align=center><img width="200" height="200" src="https://github.com/qwj19950918/vue-scroll/blob/master/src/assets/veer-302875664.jpg"/></div>

> 接到需求第一时间想到的时候找个插件来做，但是网上关于VUE的scroll并不好用，JQ的倒是很多，但是本人是在不喜欢用JQ，于是就自己搞。

> 写的过程遇到一点小问题，用了一下午的时间也没搞定，还是大佬指点一下，一分钟就搞定了，真就是差距= =。

# 问题

> 跳转路由的时候，两个页面的高度相加到一起了，所以下滚会滚很大的距离（脑壳疼！）解决方法父级添加(overflow:hidden)。（谢谢大佬）

# 思路
``` bash
滚动时，跳转路由，使用VUE自带的过度效果，设置样式，完成功能。

跳转路由的动画效果transition的name，在data中设为""：上滑时添加上滑的class 下滑时添加下滑的class。

右边导航的active根据当前router.path 来判断。

右边导航的跳转先拿到当前页数 if（点击的页数 >  当前的页数） 下滑 else(点击的页数 < 当前的页数) 上滑。

```

