import {addOnLoadListener} from '/common/helpers/load';
import Swiper, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);

addOnLoadListener(() => {
    console.log('swiper');
    const swiper = new Swiper('.swiper-container', {
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
    });
});
