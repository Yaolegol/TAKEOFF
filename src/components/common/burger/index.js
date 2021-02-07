import {addEventListener} from 'helpers/events';
import {addOnLoadListener} from 'helpers/load';
import './index.less';

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
