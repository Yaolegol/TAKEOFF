import 'components/common/logo';
import {bindEvent} from 'helpers/events';
import {initModule} from 'modules/common/controller';
import './index.less';

class SideMenu {
    constructor(element) {
        this.module = element;

        this.bind();
    }

    bind = () => {
        bindEvent(document, 'j-event-components-common-side-menu__open', this.handleOpen);
        bindEvent(this.module, 'click', this.handleModuleClick);
    }

    close = () => {
        this.module.classList.remove('active');
    }

    handleModuleClick = (e) => {
        const {target} = e;

        const isLink = target.classList.contains('j-components-common-side-menu__link');
        const isBackdrop = target === this.module;

        if(isBackdrop || isLink) {
            this.close();
        }
    }

    handleOpen = () => {
        this.module.classList.add('active');
    }
}

initModule('j-components-common-side-menu', SideMenu);
