<template>
  <div class="loginContainer">
    <header class="header">
     <div class="header_top">
       <span class="back">
         <a href="#">
           <img src="../../common/images/login/back.png" alt="">
         </a>
       </span>
       <span>
         <a href="#">
           注册
         </a>
       </span>
     </div>
     <div class="header_bottom">
       <ul>
         <li @click="setLoginMethod(true)">
           <span>普通登录</span>
           <i :class="{on: LoginMethod}"></i>
         </li>
         <li @click="setLoginMethod(false)">
           <span>手机动态密码登录</span>
           <i :class="{on: !LoginMethod}"></i>
         </li>
       </ul>
     </div>
   </header>
    <div class="login_area">
      <div class="login_method">
          <form>
            <div :class="{on: LoginMethod}">
              <section class="login_message">
                <span><img src="../../common/images/login/ico3.png" alt=""></span>
                <input type="text" placeholder="手机号/邮箱/用户名">
              </section>
              <section class="login_pwd">
                <span><img src="../../common/images/login/ico4.png" alt=""></span>
                <input type="password" placeholder="输入密码">
              </section>
            </div>
            <div :class="{on: !LoginMethod}">
              <section class="login_message">
                <span><img src="../../common/images/login/ico3.png" alt=""></span>
                <input type="text" placeholder="已注册手机号">
              </section>
              <section class="login_verification">
                <span><img src="../../common/images/login/ico4.png" alt=""></span>
                <input type="text" placeholder="请输入图片内容">
                <span class="get_verification"></span>
              </section>
              <section class="login_code">
                <span>
                  <img src="../../common/images/login/ico4.png" alt="">
                </span>
                <input type="text" placeholder="动态密码">
                <a href="">
                  <span>获取动态密码</span>
                </a>
              </section>
            </div>
            <div class="login_submit">
              <a href="#">
                忘记密码?
              </a>
              <input type="submit" value="登录">
            </div>
          </form>
      </div>
      <div class="unchanged">
        <div class="space"></div>
        <span>合作网站登录</span>
        <div class="other_cooperation">
          <ul>
            <li>
              <a href="#">
                <img src="../../common/images/login/login_ico2.png" alt="">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../common/images/login/login_ico4.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        LoginMethod: true
      }
    },

    methods: {
      setLoginMethod (LoginMethod) {
        this.LoginMethod = LoginMethod
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styuls/mixins.styl"
  .header
    box-sizing border-box
    position relative
    height 180px
    width 100%
    background url("../../common/images/login/d6aa601c1a4b5789b776f18261a960f6.png") no-repeat
    background-size 100% 100%
    .header_top
      display flex
      justify-content space-between
      .back
        width 20px
        height 20px
        >a
          >img
            width 100%
      >span
        margin 15px 10px
        >a
          color #ffffff
    .header_bottom
      background-color rgba(255,255,255,.3)
      position absolute
      bottom 0
      width 100%
      >ul
        position relative
        height 44px
        display flex
        justify-content space-between
        >li
          align-items center
          display flex
          flex-direction column
          line-height 44px
          text-align center
          width 50%
          color #ffffff
          font-size 15px
          >i
            display none
            position absolute
            bottom 0
            border 10px solid
            border-top-color transparent
            border-left-color transparent
            border-right-color transparent
            border-bottom-color #ffffff
            &.on
              display block
  .login_area
    width 100%
    background: #ffffff
    .login_method
      padding 10px 20px
      >form
        >div
          display: none
          &.on
            display block
            section
              height 46px
              width 100%
              display flex
              justify-content space-between
              bottom-border-1px(#666666)
              text-align center
              span
                margin auto 0
                width 17px
                img
                  width 100%
              input
                outline none
                margin 0 10px
                display block
                font-size 15px
                width 100%
                border none
                color #666666
                font-family: "Microsoft Yahei",tahoma,arial
              a
                margin auto 0
                position relative
                right 0
                height 20px
                font-size 12px
                color #ff4259
                border solid 1px #eb4c33
                border-radius 3px
                span
                  display block
                  width 100px
                  line-height 20px
        .login_submit
          display flex
          flex-direction column
          margin 10px 0
          a
            align-self flex-end
            font-size 14px
          input
            margin-top 10px
            height 44px
            background-color #2ec975
            color #ffffff
            font-size 15px
            border-radius 6px
    .unchanged
      width 100%
      display flex
      flex-direction column
      .space
        height 120px
      span
        color #d7d7d7
        margin 0 auto
      .other_cooperation
        width 100%
        ul
          margin 10px auto
          display flex
          justify-content space-around
          li
            text-align center
            height 58px
            a
              img
                height 100%
</style>
