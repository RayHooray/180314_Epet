<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="loginHeader">
        <div class="login_logo">
          <h2>E宠</h2>
          <p>epet.com</p>
        </div>
        <div class="login_header_title">
          <span>普通登录</span>
          <span>手机号验证码登录</span>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <span class="form_img"></span>
              <input type="text" placeholder="手机号/邮箱/用户名">
            </section>
            <section class="login_pwd">
              <span class="form_img"></span>
              <input type="password" placeholder="输入密码">
            </section>
          </div>
          <div class="off">
            <section class="login_message">
              <span class="form_img"></span>
              <input type="text" placeholder="已注册的手机号">
            </section>
            <section class="login_massage">
              <span class="form_img"></span>
              <input type="text" maxlength="6" placeholder="请输入图片内容">
              <img src="#" alt="captcha" class="get_verification">
            </section>
            <section class="login_verification">
              <span class="form_img"></span>
              <input type="tel" maxlength="8" placeholder="动态验证码">
              <button class="get_verification">
                获取动态验证码
              </button>
            </section>
          </div>
          <div class="login_other_msg">
            <a href="#">忘记密码？</a>
            <button class="login_submit">登录</button>
          </div>
        </form>
      </div>
      <div class="other_login_methods">
        <section class="co_web">
          合作网站登录
        </section>
        <section class="co_companies">
          <ul>
            <li>
              <a href="#">
                <img src="#" alt="支付宝">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="#" alt="QQ">
              </a>
            </li>
          </ul>
        </section>
      </div>
      <span>
        <i></i>
      </span>
      <span>
        <a href="">注册</a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
