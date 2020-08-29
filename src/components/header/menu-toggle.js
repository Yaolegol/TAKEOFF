import $ from "jquery";

$(document).ready(() => {
    const menu = $('.menu-mobile');

    const handleMenuClick = () => {
        menu.hasClass('menu-mobile_active') ?
            menu.removeClass('menu-mobile_active') :
            menu.addClass('menu-mobile_active')
    }

    $('.menuToggle').click(handleMenuClick);
});
