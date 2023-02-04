import {bindEvent} from 'helpers/events';
import {initModule} from 'modules/common/controller';
import './index.less';

class Burger {
    constructor(element) {
        this.module = element;

        this.bind();
    }

    bind = () => {
        bindEvent(this.module, 'click', this.handleClick);
    }

    handleClick = () => {
        document.dispatchEvent(new CustomEvent('j-event-components-common-side-menu__open'));
    }
}

initModule('j-components-common-burger', Burger);
