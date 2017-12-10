$(document).ready(function($) {
  var mySwiper = new Swiper ('.swiper-container', {
      loop:true,
      direction : 'vertical',
      mousewheelControl : true,
      onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
      },
      onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
      }   
   })
});