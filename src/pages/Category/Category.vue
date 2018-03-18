<template>
  <div class="category">
    <header class="header">
      <div class="sort" :class="{on: isShow}" @click="Tab(true)">
        <span>分类</span>
      </div>
      <div class="brand" :class="{on: !isShow}" @click="Tab(false)">
        <span>品牌</span>
      </div>
      <a href="#">
        <img src="../../common/images/category/search-ico.png" alt="">
      </a>
    </header>
    <Sort :class="{on: isShow}"/>
    <Brand :class="{on: !isShow}"/>
  </div>
</template>

<script>
  import Sort from './Sort/Sort'
  import Brand from './Brand/Brand'
  export default {
    data () {
      return {
        isShow: true
      }
    },

    methods: {
      Tab (isShow) {
        this.isShow = isShow
      }
    },

    components: {
      Sort,
      Brand
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.category
  width 100%
  .header
    padding 0 15px
    position fixed
    top 0
    left 0
    right 0
    height 40px
    border-bottom solid 1px #cbcbcb
    display flex
    justify-content center
    >div
      width 50%
      line-height 40px
      font-size 13px
      color #333333
      font-weight 700
      text-align center
      margin 0 5%
      &.sort
        display flex
        justify-content flex-end
      span
        display block
        width 40px
        height 100%
      &.on
        color #ed4044
        >span
          border-bottom 2px solid #ed4044
    a
      position absolute
      right 15px
      top 13px
      width 14px
      height 14px
      img
        width 100%
</style>
