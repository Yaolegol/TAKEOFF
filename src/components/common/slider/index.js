import {addOnLoadListener} from '/common/helpers/load';
import {createSwiper} from "/common/helpers/slider";

class Slider {
    constructor(slider) {
        this.swiper = createSwiper();
    }
}

addOnLoadListener(() => {
    const slidersList = [...document.querySelectorAll('.j-slider')];
    slidersList.forEach((slider) => {
        new Slider(slider);
    });
});
