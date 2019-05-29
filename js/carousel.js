$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            margin: 30,
            nav: true,
            autoWidth: true
        }
    );
    $('.owl-stage').children('.active').addClass('shadow');

    //обработчик на свайп
    owl.on('translated.owl.carousel', function () {
        $('.owl-stage').children(':not([active])').removeClass('shadow');
        $('.owl-stage').children('.active').addClass('shadow');

        // $('.owl-next').hasClass('disabled') ? $('.next').addClass('fifth-block-container-buttons__btn_disabled') :
        // $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
        
        // $('.owl-prev').hasClass('disabled') ? $('.prev').addClass('fifth-block-container-buttons__btn_disabled') :
        // $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
    });

    //обработчики на кнопки
    let count = 0;
    let maxCount = $('.owl-stage').children().length - 1; 
    
    $('.next').on('click', function () {
        let h4 = $('.owl-stage').children('.active').eq(2).find('.fifth-block-container-bottom-item__h4');
        $(h4).hasClass('fifth-block-container-bottom-item__h4_activ') ?
        owl.trigger('next.owl.carousel') : null;        
             
        // $('.prev').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.prev').removeClass('fifth-block-container-buttons__btn_disabled') : null;
        // $('.owl-next').hasClass('disabled') ? $('.next').addClass('fifth-block-container-buttons__btn_disabled') : null;

        count === maxCount - 1 ? $('.next').addClass('fifth-block-container-buttons__btn_disabled') :
        $('.prev').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.prev').removeClass('fifth-block-container-buttons__btn_disabled') : null;
        
        count < maxCount ? count++ : null;
        $('.owl-stage').children().eq(count - 1).find('.fifth-block-container-bottom-item__h4').removeClass('fifth-block-container-bottom-item__h4_activ');
        $('.owl-stage').children().eq(count).find('.fifth-block-container-bottom-item__h4').addClass('fifth-block-container-bottom-item__h4_activ');

        $('.owl-stage').children().eq(count - 1).find('.fifth-block-container-bottom-item-read-more').removeClass('fifth-block-container-bottom-item-read-more_activ');
        $('.owl-stage').children().eq(count).find('.fifth-block-container-bottom-item-read-more').addClass('fifth-block-container-bottom-item-read-more_activ');

    });
        

        
    
    $('.prev').on('click', function (event) {
        let h4 = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__h4');
        $(h4).hasClass('fifth-block-container-bottom-item__h4_activ') ?
        owl.trigger('prev.owl.carousel') : null; 
        
        // $('.next').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.next').removeClass('fifth-block-container-buttons__btn_disabled') : null;
        // $('.owl-prev').hasClass('disabled') ? $('.prev').addClass('fifth-block-container-buttons__btn_disabled') : null;

        count === 1 ? $('.prev').addClass('fifth-block-container-buttons__btn_disabled') :
        $('.next').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.next').removeClass('fifth-block-container-buttons__btn_disabled') : null;

        count > 0 ? count-- : null;
        $('.owl-stage').children().eq(count + 1).find('.fifth-block-container-bottom-item__h4').removeClass('fifth-block-container-bottom-item__h4_activ');
        $('.owl-stage').children().eq(count).find('.fifth-block-container-bottom-item__h4').addClass('fifth-block-container-bottom-item__h4_activ'); 
        
        $('.owl-stage').children().eq(count + 1).find('.fifth-block-container-bottom-item-read-more').removeClass('fifth-block-container-bottom-item-read-more_activ');
        $('.owl-stage').children().eq(count).find('.fifth-block-container-bottom-item-read-more').addClass('fifth-block-container-bottom-item-read-more_activ');       
    });



});