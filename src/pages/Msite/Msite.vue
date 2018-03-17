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
            <li v-for="(menu, index) in menus" :key="index">
              <a href="#">
                <span>{{menu.menu_name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="main" :class="{up: isShow}">
      <section class="swiper-container" ref="lunboSwiper">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"  v-for="(lunBo, index) in lunBos[0]" :key="index">
            <a href="#">
              <img :src="lunBo.image" alt="">
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
            <div class="marketing_goods swiper-container" ref="navCrossWise">
              <ul class="marketing_goods_list swiper-wrapper">
                <li class="marketing_goods_item swiper-slide">
                  <a href="#">
                    <img src="../../common/images/a75663e15423ece1ef9d0e908a15e9c2.jpg" alt="">
                    <div class="price">
                      <span>¥</span>
                      <span>1.00</span>
                    </div>
                    <div class="save_money">
                      <span>省9.00</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/f1b7fefaf2e0a3b01498658788d75fbd.jpg" alt="">
          </div>
          <div class="marketing_content">
            <a href="#">
              <img src="../../common/images/081c4aec9c8c81fa8dcb5bb9a63ddac5.gif" alt="">
            </a>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/02cdfda794ee4cc90e0e39462e17d49d.jpg" alt="">
          </div>
          <div class="marketing_content">
            <ul class="vip_privilege">
              <li class="vip_privilege_item">
                <a href="#">
                  <img src="../../common/images/go_001.jpg" alt="">
                </a>
              </li>
              <li class="vip_privilege_item">
                <a href="#">
                  <img src="../../common/images/go_002.jpg" alt="">
                </a>
              </li>
              <li class="vip_privilege_item">
                <a href="#">
                  <img src="../../common/images/go_003.jpg" alt="">
                </a>
              </li>
              <li class="vip_privilege_item">
                <a href="#">
                  <img src="../../common/images/go_004.jpg" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/f1b7fefaf2e0a3b01498658788d75fbd.jpg" alt="">
          </div>
          <div class="marketing_content">
            <div class="group_banner">
              <ul class="group_buy_ten_percent">
                <li class="group_buy_ten_percent_item">
                  <a href="#">
                    <img src="../../common/images/auto01.jpg" alt="">
                  </a>
                </li>
                <li class="group_buy_ten_percent_item">
                  <a href="#">
                    <img src="../../common/images/auto02.jpg" alt="">
                  </a>
                </li>
                <li class="group_buy_ten_percent_item">
                  <a href="#">
                    <img src="../../common/images/auto03.jpg" alt="">
                  </a>
                </li>
                <li class="group_buy_ten_percent_item">
                  <a href="#">
                    <img src="../../common/images/auto04.jpg" alt="">
                  </a>
                </li>
                <li class="group_buy_ten_percent_item">
                  <a href="#">
                    <img src="../../common/images/auto05.jpg" alt="">
                  </a>
                </li>
                <li class="group_buy_ten_percent_item">
                  <a href="#">
                    <img src="../../common/images/auto06.jpg" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/dapaihaohuo.jpg" alt="">
          </div>
          <div class="marketing_content">
            <a href="#">
              <img src="../../common/images/081c4aec9c8c81fa8dcb5bb9a63ddac5.gif" alt="">
            </a>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/zuican.jpg" alt="">
          </div>
          <div class="marketing_content">
            <a href="#">
              <img src="../../common/images/zuicanimg.jpg" alt="">
            </a>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/tebie.jpg" alt="">
          </div>
          <div class="marketing_content">
            <div class="special_mar">
              <div class="left">
                <a href="#">
                  <img src="../../common/images/chaopinyushou.jpg" alt="">
                </a>
              </div>
              <div class="right">
                <div class="top">
                  <a href="#">
                    <img src="../../common/images/chaopinshipin.jpg" alt="">
                  </a>
                </div>
                <div class="bottom">
                  <a href="#">
                    <img src="../../common/images/mengzhuahaohuo.jpg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="marketing">
        <div class="marketing_container">
          <div class="marketing_header">
            <img src="../../common/images/tese.jpg" alt="">
          </div>
          <div class="marketing_content">
            <div class="tese_area">
              <ul class="tese_area_list">
                <li class="tese_item">
                  <a href="#">
                    <img src="../../common/images/EpetInternational.jpg" alt="">
                  </a>
                </li>
                <li class="tese_item">
                  <a href="#">
                    <img src="../../common/images/EpetFish.jpg" alt="">
                  </a>
                </li>
                <li class="tese_item">
                  <a href="#">
                    <img src="../../common/images/NewPet.jpg" alt="">
                  </a>
                </li>
                <li class="tese_item">
                  <a href="#">
                    <img src="../../common/images/offSale.jpg" alt="">
                  </a>
                </li>
                <li class="tese_item">
                  <a href="#">
                    <img src="../../common/images/pinpaitemai.jpg" alt="">
                  </a>
                </li>
                <li class="tese_item">
                  <a href="#">
                    <img src="../../common/images/petCloth.jpg" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="statement">
        <div class="about_something">
          <span>
            <a href="#">触屏版</a>
          </span>
          <span>
            <a href="#">手机客户端</a>
          </span>
          <span>
            <a href="#">关于我们</a>
          </span>
          <span>
            <a href="#">联系我们</a>
          </span>
        </div>
        <div>
          <span>
            © wap.epet.com 版权：重庆易宠科技有限公司
          </span>
        </div>
      </section>
      <div class="space"></div>
    </main>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/dist/css/swiper.css'
  export default {
    // props: {
    //   lunBos: Array
    // },
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
    watch: {
      lunBos() {
        this.$nextTick(() => {
          let swiper = new Swiper(this.$refs.lunboSwiper, {
            autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            },
            loop: true,
            preventClicks: false,
            pagination: {
              el: '.swiper-pagination'
            }
          })

          let swiper_static = new Swiper(this.$refs.navCrossWise,{
            loop: true,
            preventClicks: false,
          })
        })
      }
    },
    mounted() {
      this.$store.dispatch('getMenus')
      this.$store.dispatch('getLunbos')
    },
    computed: {
      ...mapState(['menus', 'lunBos'])
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
          justify-content space-around
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
      .swiper-wrapper
        width 100%
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
          >a
            >img
              width 100%
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
            .marketing_goods_listmn
              width 100%
              >li
                width 20%
                height 100%
                >a
                  background #ffffff
                  display block
                  width 100%
                  height 100%
                  >img
                    width 100%
                  .price
                    margin 10px 0
                    display flex
                    color #ce3c39
                    font-size 14px
                    justify-content center
                  .save_money
                    display flex
                    font-size 14px
                    justify-content center
          .vip_privilege
            width 100%
            display flex
            flex-wrap wrap
            .vip_privilege_item
              width 50%
              >a
                >img
                  width 100%
          .group_banner
            width 100%
            overflow hidden
            .group_buy_ten_percent
              width 600%
              display flex
              .group_buy_ten_percent_item
                width 100%
                >a
                  >img
                    width 100%


          .special_mar
            background #000000
            width 100%
            display flex
            >div
              width 50%
              &.left
                >a
                  >img
                    width 100%
              &.right
                display flex
                flex-direction column
                >div
                  height 50%
                  &.top
                    >a
                      >img
                        width 100%
                  &.bottom
                    >a
                      >img
                        width 100%
          .tese_area
            width 100%
            .tese_area_list
              width 100%
              display flex
              flex-wrap wrap
              .tese_item
                width 50%
                >a
                  width 100%
                  >img
                    width 100%
    .statement
      font-size 14px
      box-sizing content-box
      .about_something
        pading 15px 0 5px
    .space
      height 55px
</style>
