//ヘッダー隠れ防ぐ
$('a[href^="#"]').click(function() {
    var speed = 800;
    var adjust = 79;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});

//バーガーメニュー
$(function () {
    $('.bgr_btn').on('click', function () {
        $('.bgr_btn').toggleClass('close');
        $('.nav_wrapper').toggleClass('slide-in');
        $('body').toggleClass('noscroll');
    });
    $('.nav_list_item>a').on('click', function(event) {
      $('.bgr_btn').trigger('click');
    });
});

//下からスライドイン
$(window).on('scroll', function(){
  var trans = $('.trans');
  var show = 'show';

  trans.each(function(){
    var transOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > transOffset - wh + (wh / 2)) {
      $(this).addClass(show);
    }
  });
});

//slider
$('.topics_list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
          breakpoint: 1024, // 768〜1023px以下のサイズに適用
          settings: {
            arrows: false,
            centerMode: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            slidesToShow: 2          }
        },
        {
          breakpoint: 768, // 767px以下のサイズに適用
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            slidesToShow: 1          
        }
        }
    ]
});
                  