import 'components/common/logo';
import {bindEvent} from 'helpers/events';
import {initModule} from 'modules/common/controller';
import './index.less';

class SideMenu {
    constructor(element) {
        this.module = element;

        this.bind();
        // this.init();
    }

    bind = () => {
        bindEvent(document, 'j-event-components-common-side-menu__open', this.handleOpen);
        bindEvent(this.module, 'click', this.handleModuleClick);
    }

    handleBackDropClick = () => {
        this.sideMenu.classList.remove('side-menu_active');
    }

    handleContentClick = (e) => {
        e.stopPropagation();
    }

    handleModuleClick = (e) => {
        const {target} = e;

        if(target === this.module) {
            this.module.classList.remove('active');
        }
    }

    handleOpen = () => {
        this.module.classList.add('active');
    }

    handleUpdateVisibility = () => {
        this.sideMenu.classList.toggle('side-menu_active');
    }

    init = () => {
        this.burger = document.querySelector('.j-burger');
        this.sideMenu = document.querySelector('.j-side-menu');
        this.sideMenuContent = document.querySelector('.j-content');
        bindEvent(this.burger, 'j-click', this.handleUpdateVisibility);
        bindEvent(this.sideMenu, 'click', this.handleBackDropClick);
        bindEvent(this.sideMenuContent, 'click', this.handleContentClick);
    }
}

initModule('j-components-common-side-menu', SideMenu);
