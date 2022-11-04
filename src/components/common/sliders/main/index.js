import 'components/common/sliders/main/controls';
import {initModule} from "helpers/module";
import Swiper, {Navigation} from "swiper";
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);

class MainSlider {
    constructor(element) {
        this.module = element;
        this.sliderId = this.module.dataset.sliderId;
        this.controlsContainer = document.querySelector(`.j-components-common-slider-main__controls[data-slider-id=${this.sliderId}]`);
        this.controlPrev = this.controlsContainer.querySelector('.j-components-common-slider-main__control-prev');
        this.controlNext = this.controlsContainer.querySelector('.j-components-common-slider-main__control-next');

        this.init();
    }

    init = () => {
        new Swiper(this.module, {
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
            navigation: {
                nextEl: this.controlNext,
                prevEl: this.controlPrev,
            },
            slidesPerView: 1.1,
            spaceBetween: 10,
        });
    }
}

initModule('j-components-common-slider-main', MainSlider);
