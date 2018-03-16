<template>
  <div class="shop_cart">
    <header class="header">
      <div class="back_up">
        <img src="../../common/images/personal-bico1.png" alt="">
      </div>
      <div class="title">
        购物车
      </div>
      <div @click="Click" class="show_hide_list">
        <img src="../../common/images/imgtk-new.png" alt="">
      </div>
    </header>
    <div class="hide_menu" :class="{on: isShow}">
      <div>
        <a href="#">
          <img src="../../common/images/head_icon1.png" alt="">
          <span>首页</span>
        </a>
      </div>
      <div>
        <a href="#">
          <img src="../../common/images/head_icon2.png" alt="">
          <span>商品分类</span>
        </a>
      </div>
      <div>
        <a href="#">
          <img src="../../common/images/head_icon4.png" alt="">
          <span>购物车</span>
        </a>
      </div>
      <div>
        <a href="#">
          <img src="../../common/images/head_icon5.png" alt="">
          <span>我的e宠</span>
        </a>
      </div>
    </div>
    <main>
      <div class="empty">
        <div>
          <div class="cart_logo"></div>
          <span>购物车是空的</span>
        </div>
        <div class="button_chose">
          <div>
            <span>去逛逛</span>
          </div>
          <div>
            <span>我的收藏</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: false
      }
    },

    methods: {
      Click () {
        console.log()
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styuls/mixins.styl"
  .header
    bottom-border-1px(#f5f5f5)
    position fixed
    top 0
    left 0
    right 0
    height 50px
    display flex
    justify-content space-around
    align-items center
    .back_up
      width 20px
      >img
        width 9px
    .title
      width 70%
      text-align center
      font-size 1.1em
    .show_hide_list
      width 20px
      >img
        width 100%
  .hide_menu
    bottom-border-1px(#efefef)
    background #ffffff
    position relative
    top 50px
    display flex
    width 100%
    justify-content space-around
    &.on
      display none
    >div
      padding 12px
      display flex
      justify-content space-around
      width 25%
      >a
        display flex
        flex-direction column
        >img
          width 30px
          margin 0 auto
        >span
          padding 5px 0
          text-align center
          color #333
          font-size 14px

  main
    width 100%
    position relative
    top 50px
</style>
