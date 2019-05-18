$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            margin: 15,
            nav: true
        }
    );    
    $('.owl-stage').children('.active').addClass('shadow');   
    

    owl.on('translated.owl.carousel', function() {
        $('.owl-stage').children(':not([active])').removeClass('shadow');   
        $('.owl-stage').children('.active').addClass('shadow');  
        $('.owl-next').hasClass('disabled') ? $('.next').addClass('fifth-block-container__btn_disabled') : $('.next').removeClass('fifth-block-container__btn_disabled');
        $('.owl-prev').hasClass('disabled') ? $('.prev').addClass('fifth-block-container__btn_disabled') : $('.prev').removeClass('fifth-block-container__btn_disabled');
    })

    $('.next').on('click', function() {
        owl.trigger('next.owl.carousel');
        $('.prev').hasClass('fifth-block-container__btn_disabled') ? $('.prev').removeClass('fifth-block-container__btn_disabled') : null;
        $('.owl-next').hasClass('disabled') ? $('.next').addClass('fifth-block-container__btn_disabled') : null;
    })
    $('.prev').on('click', function(event) {
        owl.trigger('prev.owl.carousel'); 
        $('.next').hasClass('fifth-block-container__btn_disabled') ? $('.next').removeClass('fifth-block-container__btn_disabled') : null;
        $('.owl-prev').hasClass('disabled') ? $('.prev').addClass('fifth-block-container__btn_disabled') : null;
    })    

    

});