import {addEventListener} from '/common/helpers/events';
import {addOnLoadListener} from '/common/helpers/load';
import {createSwiper} from "/common/helpers/slider";

class Slider {
    constructor(slider) {
        this.swiperId = slider.dataset.swiperId;
        this.cliderControls = document.querySelector(`.j-swiper-controls[data-swiper-id=${this.swiperId}]`);

        this.init();
    }

    init = () => {
        this.swiper = createSwiper();

        this.initArrows();
    }

    initArrows = () => {
        if(this.cliderControls) {
            this.leftArrow = this.cliderControls.querySelector('.j-swiper-left-arrow');
            this.rightArrow = this.cliderControls.querySelector('.j-swiper-right-arrow');

            if(this.leftArrow && this.rightArrow) {
                addEventListener(this.leftArrow, 'click', this.handleLeftArrowClick);
                addEventListener(this.rightArrow, 'click', this.handleRightArrowClick);
            }
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
