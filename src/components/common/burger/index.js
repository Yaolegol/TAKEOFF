import {addEventListener} from '/common/helpers/events';
import {addOnLoadListener} from '/common/helpers/load';

class Burger {
    constructor() {
        addOnLoadListener(this.init);
    }

    handleClick = (e) => {
        this.burger.dispatchEvent(new CustomEvent('j-click'));
    }

    init = () => {
        this.burger = document.querySelector('.j-burger');
        addEventListener(this.burger, 'click', this.handleClick);
    }
}

new Burger();
