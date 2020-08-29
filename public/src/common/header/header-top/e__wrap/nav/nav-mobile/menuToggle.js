$(document).ready(function () {
    $('.menuToggle').click(function () {
        $('.nav-mobile').css('visibility') === 'hidden'
        ? $('.nav-mobile').css('visibility', 'visible')
        : $('.nav-mobile').css('visibility', 'hidden');


    });
   
});