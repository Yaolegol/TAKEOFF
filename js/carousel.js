$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            margin: 30,
            nav: true,
            autoWidth: true
        }
    );

    $('.owl-stage').children('.active').eq(0).addClass('shadow');
    $('.owl-stage').children('.active').eq(1).addClass('shadow-middle-el');
    $('.owl-stage').children('.active').eq(2).addClass('shadow');
    

    //обработчик на свайп
    owl.on('translated.owl.carousel', function (e) {
        $('.owl-stage').children(':not([active])').removeClass('shadow shadow-middle-el');
        $('.owl-stage').children(':not([active])').find('.fifth-block-container-bottom-item__h4').removeClass('fifth-block-container-bottom-item__h4_activ');
        $('.owl-stage').children(':not([active])').find('.fifth-block-container-bottom-item-read-more').removeClass('fifth-block-container-bottom-item-read-more_activ');

        $('.owl-stage').children('.active').eq(0).addClass('shadow');
        $('.owl-stage').children('.active').eq(1).addClass('shadow-middle-el');
        $('.owl-stage').children('.active').eq(2).addClass('shadow');

        $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__h4').addClass('fifth-block-container-bottom-item__h4_activ');
        $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item-read-more').addClass('fifth-block-container-bottom-item-read-more_activ');
    });


    //обработчики на кнопки
    let count = 0;
    let maxCount = $('.owl-stage').children().length - 3; 
    
    $('.next').on('click', function () {
        owl.trigger('next.owl.carousel');

        count === maxCount - 1 ? $('.next').addClass('fifth-block-container-buttons__btn_disabled') :
        $('.prev').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.prev').removeClass('fifth-block-container-buttons__btn_disabled') : null;
        
        count < maxCount ? count++ : null;
    });
        
    
    $('.prev').on('click', function (event) {
        owl.trigger('prev.owl.carousel');
   
        count === 1 ? $('.prev').addClass('fifth-block-container-buttons__btn_disabled') :
        $('.next').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.next').removeClass('fifth-block-container-buttons__btn_disabled') : null;

        count > 0 ? count-- : null;
    });
});