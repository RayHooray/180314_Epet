<template>
  <div class="sort">
    <div class="menus swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-container"></li>
      </ul>
    </div>
    <div class="goods_details">
      <div class="hot_sort"></div>
      <div class="title_name"></div>
      <div class="hot_brand"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort
    width 100%
    height 100%
    display flex
    justify-content space-between
    .menus
      width 70px
    .goods_details
      width 100%

</style>
