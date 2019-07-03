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
        let notActive = $('.owl-stage').children(':not([active])');
        let a = $(notActive).find('.fifth-block-container-bottom-item__a');
        let readMore = $(notActive).find('.fifth-block-container-bottom-item-read-more');

        $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;
        $(notActive).hasClass("shadow-middle-el") ? $(notActive).removeClass('shadow-middle-el') : null;
        
        
        $(a).hasClass("fifth-block-container-bottom-item__a_activ") ?
        $(a).removeClass('fifth-block-container-bottom-item__a_activ'): null;
        
        $(readMore).hasClass("fifth-block-container-bottom-item-read-more_activ") ?
        $(readMore).removeClass('fifth-block-container-bottom-item-read-more_activ'): null;        

        $('.owl-stage').children('.active').eq(0).addClass('shadow');
        $('.owl-stage').children('.active').eq(1).addClass('shadow-middle-el');
        $('.owl-stage').children('.active').eq(2).addClass('shadow');

        $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__a').addClass('fifth-block-container-bottom-item__a_activ');
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