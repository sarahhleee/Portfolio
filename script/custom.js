// Welcome : TypeIt
$('#typing').typeIt({
    strings: ["Bussiness strategy.", "Innovation Plan.","Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
});

// Welcome : Slideshow
$('.slideshow').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    arrows: false,
    PauseOnHover: false
  });

// Header scroll function
$(window).scroll(function(){
  if($(window).scrollTop() > 50) {
    $('header, .btn-top').addClass('active')
  }
  else {
    $('header, .btn-top').removeClass('active')
  }
})

// Faq Accordion 아코디언
$('.faq-desc').eq(0).show();
$('.faq-title').click(function(){
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children('.faq-desc').stop().slideUp();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });
    
    
/* Slick Slider - review, guide */
$('.review-slider,.mockup-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    PauseOnHover: false
  });

/* Guide : video-modal */
$('.open-modal').click(function(){
  $('.video-modal').fadeIn()
  $('body').addClass('active')
})
$('.close-modal').click(function(){
  $('.video-modal').fadeOut()
  $('body').removeClass('active')
})

// WOW scroll animation
wow = new WOW({
  boxClass: 'wow',
  offset: 150,
  mobile: false
})
wow.init()