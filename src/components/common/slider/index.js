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

            this.checkArrowsEnabled();

            if(this.leftArrow && this.rightArrow) {
                addEventListener(this.leftArrow, 'click', this.handleLeftArrowClick);
                addEventListener(this.rightArrow, 'click', this.handleRightArrowClick);
            }
        }
    }

    handleLeftArrowClick = () => {
        this.swiper.slidePrev();
        console.log('isBeginning');
        console.log(this.swiper.isBeginning);

        if(this.swiper.isBeginning) {
            this.leftArrow.classList.add('slider-controls__arrow-container_disabled');
        } else {
            this.rightArrow.classList.remove('slider-controls__arrow-container_disabled');
        }
    }

    handleRightArrowClick = () => {
        this.swiper.slideNext();
        console.log('isEnd');
        console.log(this.swiper.isEnd);
        if(this.swiper.isEnd) {
            this.rightArrow.classList.add('slider-controls__arrow-container_disabled');
        } else {
            this.leftArrow.classList.remove('slider-controls__arrow-container_disabled');
        }
    }

    checkArrowsEnabled = () => {
        if(this.swiper.isBeginning) {
            this.leftArrow.classList.add('slider-controls__arrow-container_disabled');
        } else if(this.swiper.isEnd) {
            this.rightArrow.classList.add('slider-controls__arrow-container_disabled');
        }
    }
}

addOnLoadListener(() => {
    const slidersList = [...document.querySelectorAll('.j-slider')];
    slidersList.forEach((slider) => {
        new Slider(slider);
    });
});
