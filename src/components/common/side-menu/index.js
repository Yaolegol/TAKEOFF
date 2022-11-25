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

    handleModuleClick = (e) => {
        const {target} = e;

        if(target !== this.module) {
            return;
        }

        this.module.classList.remove('active');
    }

    handleOpen = () => {
        this.module.classList.add('active');
    }
}

initModule('j-components-common-side-menu', SideMenu);
