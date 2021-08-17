$(function(){
// banner slider goes here 

$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    fade:true,
    speed:1500,
  });

  // back to top goes here
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1500);
  });

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 150){
        $('.back-to-top').fadeIn(500);
    }
    else {
        $('.back-to-top').fadeOut(500);
    }
  });

});
