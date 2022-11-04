import {bindEvent} from 'helpers/events';
import './index.less';

class SideMenu {
    constructor() {
        this.init();
    }

    handleBackDropClick = () => {
        this.sideMenu.classList.remove('side-menu_active');
    }

    handleContentClick = (e) => {
        e.stopPropagation();
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

new SideMenu;
