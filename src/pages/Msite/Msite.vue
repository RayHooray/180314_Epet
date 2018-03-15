<template>
  <div class="msite">
    <div class="downloadApp" :class="{on: isShow}">
      <div class="relation_link">
        <span class="closerBtn" @click="Chose">
          <img class="closerBtnImg" src="../../common/images/closebtn_03.png" alt="">
        </span>
        <a href="#">
          <img src="../../common/images/c63b6e6cf483cbb61196f658920a9d6e.jpg" alt="">
        </a>
      </div>
    </div>
    <header :class="{up: isShow}">
      <section class="option">
        <div class="relation_link local">
          <span>狗狗</span>
          <span>|</span>
          <span>重庆</span>
          <img src="../../common/images/downMore.png" alt="">
        </div>
        <div class="search">
          <a href="#">
            <input type="text" disabled="disabled" placeholder="搜索商品和品牌">
          </a>
        </div>
        <div class="hint">
          <a href="#">
            <img src="../../common/images/mydope.png" alt="">
          </a>
        </div>
      </section>
      <nav class="nav">
        <div class="navContainer">
          <ul class="navItems">
            <li>
              <a href="#">
                <span>首页</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>狗狗主粮</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>服饰城</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>医疗保健</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>零食玩具</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>日用外出</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>美容香波</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="main" :class="{up: isShow}">
      <section class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#">
              <img src="../../common/images/369bb47c593f6944600ffd807bad927d.jpg" alt="">
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="../../common/images/434b229e7787d829b3d184b3589b1f4b.jpg" alt="">
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="../../common/images/6814c3e5ea5473b8c7b07bf0cbe0472d.jpg" alt="">
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="../../common/images/8487a490b5541a4154f57000db9c3193.jpg" alt="">
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="../../common/images/22878e4e3dfd9fb615efbdd8204f597c.jpg" alt="">
            </a>
          </li>
        </ul>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </section>
      <div class="fixed_img">
        <img src="../../common/images/b611670706f71f0ba6937083d201996e.jpg" alt="">
      </div>
      <section class="mainNav">
        <ul class="mainNavContainer">
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/001.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/002.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/003.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/004.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/005.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/006.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/007.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/008.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/009.jpg" alt="">
            </a>
          </li>
          <li class="mainNavItem">
            <a href="#">
              <img src="../../common/images/010.jpg" alt="">
            </a>
          </li>
        </ul>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/85e2ada29e2157daeda797903cd13dd2.jp.jpg" alt="">
          </div>
          <div class="marketing_content">
            <div class="marketing_msg">
              <div class="marketing_name">
                <img src="../../common/images/new_index_icon_suprice.png" alt="">
              </div>
              <div class="marketing_other_msg">
                <div>本场结束</div>
                <div class="over_time">
                  <span>21</span>:<span>00</span>
                </div>
                <div class="more_msg">
                  <a href="#">
                    更多 <img src="../../common/images/more.png" alt="">
                  </a>
                </div>
              </div>
            </div>
            <div class="marketing_goods">
              <ul class="marketing_goods_list">
                <li class="marketing_goods_item">
                  <a href="#">
                    <img src="../../common/images/a75663e15423ece1ef9d0e908a15e9c2.jpg" alt="">
                    <div></div>
                    <p></p>
                  </a>
                </li>
                <li class="marketing_goods_item">
                  <a href="#">
                    <img src="../../common/images/108b7fff432b4b815b121ea94936e639.jpg" alt="">
                    <div></div>
                    <p></p>
                  </a>
                </li>
                <li class="marketing_goods_item">
                  <a href="#">
                    <img src="../../common/images/61c905bd1ab6b8511a37e5a009c44cbc.jpg" alt="">
                    <div></div>
                    <p></p>
                  </a>
                </li>
                <li class="marketing_goods_item">
                  <a href="#">
                    <img src="../../common/images/0d8c8914019ac2d840ddc0db3ab64c1e.jpg" alt="">
                    <div></div>
                    <p></p>
                  </a>
                </li>
                <li class="marketing_goods_item">
                  <a href="#">
                    <img src="../../common/images/034b6c4c8fe90c8ef7bdc5816dd0f72d.jpg" alt="">
                    <div></div>
                    <p></p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </main>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/dist/css/swiper.css'
  export default {
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      Chose () {
        this.isShow = true
      }
    },
    mounted () {
          new Swiper('.swiper-container',{
            autoplay:true,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .downloadApp
    position fixed
    top 0
    left 0
    right 0
    z-index 3
    &.on
      display none
    .relation_link
      overflow hidden
      height 55px
      .closerBtn
        position absolute
        left 2%
        top 20%
        width 18.5px
        height 18.5px
      img
        width: 100%
  header
    background #ffffff
    position fixed
    top 55px
    width 100%
    z-index 3
    &.up
      top 0
    .option
      height 51px
      display flex
      align-items center
      justify-content space-around
      .local
        font-size 14px
        color #898989
        img
          width 10px
      .search
        width 60%
        input
          width 100%
          height 25px
          border-radius 4px
      .hint
        img
          width 25px
    .nav
      width 100%
      .navContainer
        width 100%
        overflow hidden
        overflow-x auto
        .navItems
          width 131%
          display flex
          li
            margin 10px 10px
            font-size 14px
  .main
    width 100%
    position relative
    top 145px
    font-size 0
    &.up
      top 90px
    .swiper-container
      width 100%
      overflow hidden
      .swiper-wrapper
        width 500%
        display flex
        .swiper-slide
          width 100%
          >a
            >img
              display block
              width 100%
    .fixed_img
      width 100%
      >img
        width 100%
    .mainNav
      width 100%
      .mainNavContainer
        width 100%
        display flex
        flex-wrap wrap
        .mainNavItem
          width 20%
          >a
            >img
              display block
              width 100%

    .marketing
      .marketing_container
        .marketing_header
          >img
            width 100%
        .marketing_content
          .marketing_msg
            box-sizing border-box
            padding 5px
            width 100%
            display flex
            justify-content space-between
            .marketing_name
              width 85px
              >img
                width 100%
            .marketing_other_msg
              width 170px
              color black
              display flex
              justify-content space-between
              font-size 14px
              >div
                height 100%
                line-height 19px
                &.over_time
                  >span
                    border 1px solid #ddd
              .more_msg
                font-size 12px
                >a
                  >img
                    width 12px
          .marketing_goods
            width 100%
</style>
