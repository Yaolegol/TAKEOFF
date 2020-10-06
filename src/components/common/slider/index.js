import {addEventListener} from '/common/helpers/events';
import {addOnLoadListener} from '/common/helpers/load';
import {createSwiper} from "/common/helpers/slider";

class Slider {
    constructor(slider) {
        this.swiperId = slider.dataset.swiperId;
        this.leftArrow = document.querySelector(`.j-swiper-left-arrow[data-swiper-id=${this.swiperId}]`);
        this.rightArrow = document.querySelector(`.j-swiper-right-arrow[data-swiper-id=${this.swiperId}]`);

        this.init();
    }

    init = () => {
        this.swiper = createSwiper();

        this.initArrows();
    }

    initArrows = () => {
        if(this.leftArrow && this.rightArrow) {
            addEventListener(this.leftArrow, 'click', this.handleLeftArrowClick);
            addEventListener(this.rightArrow, 'click', this.handleRightArrowClick);
        }
    }

    handleLeftArrowClick = () => {
        this.swiper.slidePrev();
    }

    handleRightArrowClick = () => {
        this.swiper.slideNext();
    }
}

addOnLoadListener(() => {
    const slidersList = [...document.querySelectorAll('.j-slider')];
    slidersList.forEach((slider) => {
        new Slider(slider);
    });
});
