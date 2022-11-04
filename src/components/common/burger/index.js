import {bindEvent} from 'helpers/events';
import './index.less';

class Burger {
    constructor() {
        this.init();
    }

    handleClick = (e) => {
        this.burger.dispatchEvent(new CustomEvent('j-click'));
    }

    init = () => {
        this.burger = document.querySelector('.j-burger');
        bindEvent(this.burger, 'click', this.handleClick);
    }
}

new Burger();
