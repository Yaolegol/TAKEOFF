import {addEventListener} from 'helpers/events';
import {addOnLoadListener} from 'helpers/load';
import {createSwiper} from "helpers/slider";

class Slider {
    constructor(slider) {
        this.swiperId = slider.dataset.swiperId;
        this.cliderControls = document.querySelector(`.j-swiper-controls[data-swiper-id=${this.swiperId}]`);

        this.init();
    }

    bind = () => {
        this.swiper.on('slideChange', this.checkArrowsEnabled);
    }

    checkArrowsEnabled = () => {
        this.checkIsBeginning();
        this.checkIsEnd();
    }

    checkIsBeginning = () => {
        if(this.swiper.isBeginning) {
            this.leftArrow.classList.add('slider-controls__arrow-container_disabled');
        } else {
            this.leftArrow.classList.remove('slider-controls__arrow-container_disabled');
        }
    }

    checkIsEnd = () => {
        if(this.swiper.isEnd) {
            this.rightArrow.classList.add('slider-controls__arrow-container_disabled');
        } else {
            this.rightArrow.classList.remove('slider-controls__arrow-container_disabled');
        }
    }

    init = () => {
        this.swiper = createSwiper();

        this.bind();
        this.initArrows();
    }

    initArrows = () => {
        if(this.cliderControls) {
            this.leftArrow = this.cliderControls.querySelector('.j-swiper-left-arrow');
            this.rightArrow = this.cliderControls.querySelector('.j-swiper-right-arrow');

            this.checkArrowsEnabled();

            if(this.leftArrow && this.rightArrow) {
                addEventListener(this.leftArrow, 'click', this.handleLeftArrowClick);
                addEventListener(this.rightArrow, 'click', this.handleRightArrowClick);
            }
        }
    }

    handleLeftArrowClick = () => {
        this.swiper.slidePrev();

        this.checkArrowsEnabled();
    }

    handleRightArrowClick = () => {
        this.swiper.slideNext();

        this.checkArrowsEnabled();
    }
}

addOnLoadListener(() => {
    const slidersList = [...document.querySelectorAll('.j-slider')];
    slidersList.forEach((slider) => {
        new Slider(slider);
    });
});
