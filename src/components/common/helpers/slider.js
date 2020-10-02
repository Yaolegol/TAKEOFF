import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

export const createSwiper = () => {
    return new Swiper('.swiper-container', {
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 120
            },
        },
        slidesPerView: 1,
        spaceBetween: 10
    });
}
