<template>
  <div class="brand_area">
    <ul class="brands_container">
      <li class="brand_cube">
        <div class="title">
          <span>—— 推荐品牌 ——</span>
        </div>
        <ul class="brands_list">
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="brand_cube">
        <div class="title">
          <span>—— 推荐品牌 ——</span>
        </div>
        <ul class="brands_list">
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="brand_cube">
        <div class="title">
          <span>—— 推荐品牌 ——</span>
        </div>
        <ul class="brands_list">
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
          <li class="brand_item">
            <a href="#">
              <div class="img_container">
                <img src="../../../common/images/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
              </div>
              <p class="brand_name">冠能</p>
              <p class="location">美国</p>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styuls/mixins.styl"
  .brands_container
    margin-top 45px
    .brand_cube
      margin-top 5px
      background #ffffff
      .title
        bottom-border-1px(#efefef)
        font-size 12px
        color #999999
        padding 20px 0
        text-align center
      .brands_list
        padding 5px 5px
        display flex
        flex-wrap wrap
        .brand_item
          width 33.33333%
          text-align center
          a
            .img_container
              box-sizing border-box
              padding 10px 10px 10px
              width 100%
              border 1px solid #e2e2e2
              img
                max-width 90%
            p
              height 20px
              white-space nowrap
              font-size 13px
              &.brand_name
                margin-top 5px
                color #333333
              &.location
                font-size 12px

</style>
