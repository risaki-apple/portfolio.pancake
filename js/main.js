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
                  