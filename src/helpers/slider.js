import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

export const createSwiper = () => {
    return new Swiper('.swiper-container', {
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 120
            },
        },
        slidesPerView: 1.1,
        spaceBetween: 10,
    });
}
