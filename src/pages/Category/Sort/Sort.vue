<template>
  <div class="sort">
    <div class="sort_container">
      <div class="menus swiper-container">
        <ul class="swiper-wrapper menus-list">
          <li class="menus-item">
            <span>为您推荐</span>
          </li>
          <li class="menus-item">
            <span>为您推荐</span>
          </li>
          <li class="menus-item">
            <span>为您推荐</span>
          </li>
          <li class="menus-item">
            <span>为您推荐</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
          <li class="menus-item">
            <span>hello</span>
          </li>
        </ul>
      </div>
      <div class="goods_details">
        <ul class="goods_list_content">
          <li>
            <header>
              <span class="name">为您推荐</span>
              <span class="more">更多</span>
            </header>
            <ul class="goods_list">
              <li class="goods_items">
                <img src="../../../common/images/81f4ac6b5b31143c056046bd9dc14b9e.jpg" alt="">
                <span>体内驱虫</span>
              </li>
              <li class="goods_items">
                <img src="../../../common/images/81f4ac6b5b31143c056046bd9dc14b9e.jpg" alt="">
                <span>体内驱虫</span>
              </li><li class="goods_items">
              <img src="../../../common/images/81f4ac6b5b31143c056046bd9dc14b9e.jpg" alt="">
              <span>体内驱虫</span>
            </li><li class="goods_items">
              <img src="../../../common/images/81f4ac6b5b31143c056046bd9dc14b9e.jpg" alt="">
              <span>体内驱虫</span>
            </li><li class="goods_items">
              <img src="../../../common/images/81f4ac6b5b31143c056046bd9dc14b9e.jpg" alt="">
              <span>体内驱虫</span>
            </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styuls/mixins.styl"
  .sort_container
    width 100%
    margin-top 45px
    display flex
    justify-content space-between
    .menus
      width 70px
      .menus-list
        background aqua
        display flex
        flex-direction column
        .menus-item
          height 50px
          text-align center
          line-height 50px
          background red
    .goods_details
        margin-left 5px
        overflow hidden
        width 80%
        flex-grow 1
        box-sizing border-box
        display flex
        flex-direction column
        li
          background #ffffff
          display flex
          flex-direction column
          bottom-border-1px(#efefef)
          header
            display flex
            justify-content space-between
            bottom-border-1px(#efefef)
            span
              padding 0 10px
          .goods_list
            display flex
            flex-wrap wrap
            width 100%
            .goods_items
              width 33.333333%
              img
                width 100%
              span
                text-align center
                margin 5 auto

</style>
