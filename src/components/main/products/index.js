import {addOnLoadListener} from '/common/helpers/load';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

addOnLoadListener(() => {
    console.log('swiper');
    const swiper = new Swiper('.swiper-container');
});
