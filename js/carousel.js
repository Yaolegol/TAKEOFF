$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            margin: 15,
            nav: true
        }
    );
    $('.owl-stage').children('.active').addClass('shadow');

    //обработчик на свайп
    owl.on('translated.owl.carousel', function () {
        $('.owl-stage').children(':not([active])').removeClass('shadow');
        $('.owl-stage').children('.active').addClass('shadow');

        // $('.owl-next').hasClass('disabled') ? $('.next').addClass('fifth-block-container__btn_disabled') :
        // $('.next').removeClass('fifth-block-container__btn_disabled');
        
        // $('.owl-prev').hasClass('disabled') ? $('.prev').addClass('fifth-block-container__btn_disabled') :
        // $('.prev').removeClass('fifth-block-container__btn_disabled');
    });

    //обработчики на кнопки
    let count = 0;
    let maxCount = $('.owl-stage').children().length - 1;
    
    $('.next').on('click', function () {
        owl.trigger('next.owl.carousel'); 
        
        // $('.prev').hasClass('fifth-block-container__btn_disabled') ? $('.prev').removeClass('fifth-block-container__btn_disabled') : null;
        // $('.owl-next').hasClass('disabled') ? $('.next').addClass('fifth-block-container__btn_disabled') : null;

        count === maxCount - 1 ? $('.next').addClass('fifth-block-container__btn_disabled') :
        $('.prev').hasClass('fifth-block-container__btn_disabled') ? $('.prev').removeClass('fifth-block-container__btn_disabled') : null;
        
        count < maxCount ? count++ : null;
        $('.owl-stage').children().eq(count - 1).find('.fifth-block-container__h4').removeClass('fifth-block-container__h4_activ');
        $('.owl-stage').children().eq(count).find('.fifth-block-container__h4').addClass('fifth-block-container__h4_activ');        
    });
    
    $('.prev').on('click', function (event) {
        owl.trigger('prev.owl.carousel');
        
        // $('.next').hasClass('fifth-block-container__btn_disabled') ? $('.next').removeClass('fifth-block-container__btn_disabled') : null;
        // $('.owl-prev').hasClass('disabled') ? $('.prev').addClass('fifth-block-container__btn_disabled') : null;

        count === 1 ? $('.prev').addClass('fifth-block-container__btn_disabled') :
        $('.next').hasClass('fifth-block-container__btn_disabled') ? $('.next').removeClass('fifth-block-container__btn_disabled') : null;

        count > 0 ? count-- : null;
        $('.owl-stage').children().eq(count + 1).find('.fifth-block-container__h4').removeClass('fifth-block-container__h4_activ');
        $('.owl-stage').children().eq(count).find('.fifth-block-container__h4').addClass('fifth-block-container__h4_activ');        
    });



});