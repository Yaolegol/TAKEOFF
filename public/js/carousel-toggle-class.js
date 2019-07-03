$(document).ready(function() {    
    let readMore = $('.fifth-block-container-bottom-item').find('.fifth-block-container-bottom-item-read-more');
    let flag = false;

    $(readMore)
        .on('mouseover', function(e) {
            flag = $(this).siblings('.fifth-block-container-bottom-item__a').hasClass('fifth-block-container-bottom-item__a_activ');
            flag ? null :
            $(this).siblings('.fifth-block-container-bottom-item__a').addClass('fifth-block-container-bottom-item__a_activ');
        })
        .on('mouseout', function (e) {
            flag ? null :
            $(this).siblings('.fifth-block-container-bottom-item__a').removeClass('fifth-block-container-bottom-item__a_activ');
        });

 });