$(document).ready(function() {    
    let readMore = $('.fifth-block-container-bottom-item').find('.fifth-block-container-bottom-item-read-more');
    let flag = false;

    $(readMore)
        .on('mouseover', function(e) {
            flag = $(this).siblings('.fifth-block-container-bottom-item__h4').hasClass('fifth-block-container-bottom-item__h4_activ');
            flag ? null :
            $(this).siblings('.fifth-block-container-bottom-item__h4').addClass('fifth-block-container-bottom-item__h4_activ');
        })
        .on('mouseout', function (e) {
            flag ? null :
            $(this).siblings('.fifth-block-container-bottom-item__h4').removeClass('fifth-block-container-bottom-item__h4_activ');
        });

 });