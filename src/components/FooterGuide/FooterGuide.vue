<template>
  <div class="FooterGuide">
    <ul class="guide_list">
      <li @click="goto('/msite')">
        <div class="footer_item msite" :class="{on: isCurrent('/msite')}">
        </div>
      </li>
      <li @click="goto('/category')">
        <div class="footer_item category" :class="{on: isCurrent('/category')}">
        </div>
      </li>
      <li @click="goto('/shopcart')">
        <div class="footer_item shopCart" :class="{on: isCurrent('/shopcart')}">
        </div>
      </li>
      <li @click="goto('/login')">
        <div class="footer_item mine" :class="{on: isCurrent('/login')}">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/styuls/mixins.styl"
  .FooterGuide
    background #ffffff
    height 55px
    position fixed
    bottom 0
    left 0
    right 0
    .guide_list
      height 100%
      width 100%
      display flex
      &>li
        width 25%
        &.on
          background aqua
        .footer_item
          margin 4px auto 0
          background url("../../common/images/img.png") no-repeat
          background-size 234px 163px
          width 42px
          height 40px
        .msite
          background-position -85px 0
          &.on
            background-position 0 0
        .category
          background-position -85px -41px
          &.on
            background-position 0 -41px
        .shopCart
          background-position -85px -81px
          &.on
            background-position 0 -81px
        .mine
          background-position -85px -122px
          &.on
            background-position 0 -122px

</style>
